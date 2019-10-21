// @flow
import { useReducer } from 'react';

export type Mana = {|
  colorless: number,
  white: number,
  blue: number,
  black: number,
  red: number,
  green: number,
|};

export type Color = $Keys<Mana>;

export type Player = {|
  life: number,
  mana: Mana,
|};

const INITIAL_MANA: Mana = {
  colorless: 0,
  white: 0,
  blue: 0,
  black: 0,
  red: 0,
  green: 0,
};

const INITIAL_PLAYER: Player = {
  life: 20,
  mana: INITIAL_MANA,
};

function increment(amt: number): number {
  return amt + 1;
}

function decrement(amt: number): number {
  return Math.max(amt - 1, 0);
}

function changeMana(mana: Mana, color: Color, fn: (number) => number): Mana {
  return { ...mana, [color]: fn(mana[color]) };
}

type PlayerAction =
  | { type: 'reset' }
  | { type: 'increment_life' }
  | { type: 'decrement_life' }
  | { type: 'increment_mana', color: Color }
  | { type: 'decrement_mana', color: Color }
  | { type: 'reset_mana' };

function playerReducer(player: Player, action: PlayerAction): Player {
  switch (action.type) {
    case 'reset':
      return INITIAL_PLAYER;
    case 'increment_life':
      return { ...player, life: increment(player.life) };
    case 'decrement_life':
      return { ...player, life: decrement(player.life) };
    case 'increment_mana': {
      return { ...player, mana: changeMana(player.mana, action.color, increment) };
    }
    case 'decrement_mana': {
      return { ...player, mana: changeMana(player.mana, action.color, decrement) };
    }
    case 'reset_mana':
      return { ...player, mana: INITIAL_MANA };
    default:
      (action.type: empty);
      return player;
  }
}

export type PlayerActions = {|
  reset: () => void,
  incrementLife: () => void,
  decrementLife: () => void,
  incrementMana: (color: Color) => void,
  decrementMana: (color: Color) => void,
  resetMana: () => void,
|};

export default function usePlayer(): [Player, PlayerActions] {
  const [player, dispatch] = useReducer(playerReducer, INITIAL_PLAYER);

  const actions: PlayerActions = {
    reset: () => dispatch({ type: 'reset' }),
    incrementLife: () => dispatch({ type: 'increment_life' }),
    decrementLife: () => dispatch({ type: 'decrement_life' }),
    incrementMana: (color: Color) => dispatch({ type: 'increment_mana', color }),
    decrementMana: (color: Color) => dispatch({ type: 'decrement_mana', color }),
    resetMana: () => dispatch({ type: 'reset_mana' }),
  };

  return [player, actions];
}
