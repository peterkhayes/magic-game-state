// @flow
import { useReducer } from 'react';

export type GameState = {|
  storm: number,
|};

const INITIAL_GAME_STATE: GameState = {
  storm: 0,
};

type GameStateAction =
  | { type: 'reset_storm' }
  | { type: 'increment_storm' }
  | { type: 'decrement_storm' };

function gameStateReducer(gameState: GameState, action: GameStateAction): GameState {
  switch (action.type) {
    case 'increment_storm':
      return { ...gameState, storm: gameState.storm + 1 };
    case 'decrement_storm':
      return { ...gameState, storm: gameState.storm - 1 };
    case 'reset_storm':
      return { ...gameState, storm: 0 };
    default:
      return gameState;
  }
}

export type GameStateActions = {|
  incrementStorm: () => void,
  decrementStorm: () => void,
  resetStorm: () => void,
|};

export default function useGameState(): [GameState, GameStateActions] {
  const [gameState, dispatch] = useReducer(gameStateReducer, INITIAL_GAME_STATE);

  const gameStateActions: GameStateActions = {
    incrementStorm: () => dispatch({ type: 'increment_storm' }),
    decrementStorm: () => dispatch({ type: 'decrement_storm' }),
    resetStorm: () => dispatch({ type: 'reset_storm' }),
  };

  return [gameState, gameStateActions];
}
