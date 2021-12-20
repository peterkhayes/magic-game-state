import React, { useCallback, useState, useEffect, useRef } from "react";

interface DesiredHandlers {
  onTap: () => void;
  onLongPress: () => void;
}

type OutputHandlers = Partial<React.HTMLAttributes<HTMLElement>>

const LONG_PRESS_TIMEOUT = 600;

export function useTouchEvents(
  { onTap, onLongPress }: DesiredHandlers,
  longPressTimeout: number = LONG_PRESS_TIMEOUT
): [boolean, OutputHandlers] {
  // Create a ref to store the long press timeout.
  // Make sure to clear it when the component unmounts.
  const timeoutRef = useRef<number | null>(null);
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
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setPressed(true);

      timeoutRef.current = window.setTimeout(() => {
        runIfPressed(onLongPress);
        setPressed(false);
      }, longPressTimeout);
    },
    [longPressTimeout, onLongPress, runIfPressed, setPressed]
  );

  // When the user finishes their click/tap, exit the pressed state.
  // If a long press hasn't already happened, trigger the tap handler.
  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      runIfPressed(onTap);
      setPressed(false);
    },
    [onTap, runIfPressed, setPressed]
  );

  // Clear everything if the user doesn't stay in the container.
  const onPointerLeave = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPressed(false)
  }, [setPressed]);

  return [
    showPressIndicator,
    {
      onPointerDown,
      onPointerUp,
      onPointerLeave,
    },
  ];
}
