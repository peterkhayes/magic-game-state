// @flow
import { useCallback, useState, useEffect, useRef } from 'react';

type Input = {|
  onTap: () => void,
  onLongPress: () => void,
|};

type OutputHandlers = {
  onPointerDown: (SyntheticPointerEvent<HTMLElement>) => void,
  onPointerUp: (SyntheticPointerEvent<HTMLElement>) => void,
  onPointerLeave: (SyntheticPointerEvent<HTMLElement>) => void,
};

type Output = [boolean, OutputHandlers];

const LONG_PRESS_TIMEOUT = 600;

export default function useTouchEvents(
  { onTap, onLongPress }: Input,
  longPressTimeout?: number = LONG_PRESS_TIMEOUT,
): Output {
  // Create a ref to store the long press timeout.
  // Make sure to clear it when the component unmounts.
  const timeoutRef = useRef<?TimeoutID>(null);
  useEffect(() => {
    return () => {
      if (timeoutRef.current != null) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Create a ref to store the press state. This is necessary because closure
  // scope in timeouts seems to cause problems if we just store this as state.
  const pressedRef = useRef<boolean>(false);

  // ...but also store this value in state so that rerenders happen properly.
  const [showPressIndicator, setShowPressIndicator] = useState(false);

  // This function unifies the state representation of "pressed" with the
  // ref representation. The event handlers all use this.
  const setPressed = useCallback((pressed: boolean) => {
    if (timeoutRef.current != null) clearTimeout(timeoutRef.current);
    setShowPressIndicator(pressed);
    pressedRef.current = pressed;
  }, []);

  // Additionally, for both taps and long presses, we want to run code
  // only if a press is still occuring. This unifies that logic.
  const runIfPressed = useCallback((fn: () => void) => {
    if (pressedRef.current) fn();
  }, []);

  // When the user clicks/taps, enter the pressed state. Also begin a
  // timeout to detect a long press.
  const onPointerDown = useCallback(
    (e) => {
      e.stopPropagation();
      setPressed(true);

      timeoutRef.current = setTimeout(() => {
        runIfPressed(onLongPress);
        setPressed(false);
      }, longPressTimeout);
    },
    [longPressTimeout, onLongPress, runIfPressed, setPressed],
  );

  // When the user finishes their click/tap, exit the pressed state.
  // If a long press hasn't already happened, trigger the tap handler.
  const onPointerUp = useCallback(
    (e) => {
      e.stopPropagation();
      runIfPressed(onTap);
      setPressed(false);
    },
    [onTap, runIfPressed, setPressed],
  );

  // Clear everything if the user doesn't stay in the container.
  const onPointerLeave = useCallback(() => setPressed(false), [setPressed]);

  return [
    showPressIndicator,
    {
      onPointerDown,
      onPointerUp,
      onPointerLeave,
    },
  ];
}
