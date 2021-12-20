import { useMemo, useReducer } from "react";
import { assertNever } from "../utils/types";

export function increment(amount: number): number {
  return amount + 1;
}

export function decrement(
  amount: number,
  minValue: number = -Infinity
): number {
  return Math.max(amount - 1, minValue);
}

export interface CounterActions {
  increment(): void;
  decrement(): void;
  reset(): void;
}

type CounterAction = keyof CounterActions;

export function useCounter(
  initialValue: number,
  minValue: number = 0
): [number, CounterActions] {
  const [currentValue, dispatch] = useReducer(
    (value: number, action: CounterAction) => {
      switch (action) {
        case "increment":
          return increment(value);
        case "decrement":
          return decrement(value, minValue);
        case "reset":
          return initialValue;
        default:
          assertNever(action);
      }
    },
    initialValue
  );

  const actions: CounterActions = useMemo(
    () => ({
      increment: () => dispatch("increment"),
      decrement: () => dispatch("decrement"),
      reset: () => dispatch("reset"),
    }),
    [dispatch]
  );

  return [currentValue, actions];
}
