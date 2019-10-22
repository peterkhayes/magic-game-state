// @flow
import { useReducer } from 'react';
import { increment, decrement } from './useCounter';

export type Mana = {|
  colorless: number,
  white: number,
  blue: number,
  black: number,
  red: number,
  green: number,
|};
export type Color = $Keys<Mana>;

const INITIAL_MANA: Mana = {
  colorless: 0,
  white: 0,
  blue: 0,
  black: 0,
  red: 0,
  green: 0,
};

type ManaAction =
  | { type: 'increment', color: Color }
  | { type: 'decrement', color: Color }
  | { type: 'reset' };

export type ManaActions = {|
  increment: (color: Color) => void,
  decrement: (color: Color) => void,
  reset: () => void,
|};

export default function useMana(): [Mana, ManaActions] {
  const [currentMana, dispatch] = useReducer((mana: Mana, action: ManaAction) => {
    switch (action.type) {
      case 'increment':
        return { ...mana, [action.color]: increment(mana[action.color]) };
      case 'decrement':
        return { ...mana, [action.color]: decrement(mana[action.color]) };
      case 'reset':
        return INITIAL_MANA;
      default:
        return mana;
    }
  }, INITIAL_MANA);

  const actions: ManaActions = {
    increment: (color) => dispatch({ type: 'increment', color }),
    decrement: (color) => dispatch({ type: 'decrement', color }),
    reset: () => dispatch({ type: 'reset' }),
  };

  return [currentMana, actions];
}
