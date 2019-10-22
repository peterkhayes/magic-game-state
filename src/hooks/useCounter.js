// @flow
import { useReducer } from 'react';

export function increment(amount: number): number {
  return amount + 1;
}

export function decrement(amount: number): number {
  return Math.max(amount - 1, 0);
}

type CounterAction = 'increment' | 'decrement' | 'reset';

export type CounterActions = {|
  increment: () => void,
  decrement: () => void,
  reset: () => void,
|};

export default function useCounter(initialValue: number): [number, CounterActions] {
  const [currentValue, dispatch] = useReducer((value: number, action: CounterAction) => {
    switch (action) {
      case 'increment':
        return value + 1;
      case 'decrement':
        return Math.max(value - 1, 0);
      case 'reset':
        return initialValue;
      default:
        return value;
    }
  }, initialValue);

  const actions: CounterActions = {
    increment: () => dispatch('increment'),
    decrement: () => dispatch('decrement'),
    reset: () => dispatch('reset'),
  };

  return [currentValue, actions];
}
