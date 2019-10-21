// @flow
import React from 'react';
import type { GameState, GameStateActions } from '../hooks/useGameState';
import styles from './GameControls.css';

type Props = {|
  ...GameState,
  ...GameStateActions,
|};

export default function GameControls({
  storm,
  incrementStorm,
  decrementStorm,
  resetStorm,
}: Props) {
  return <div className={styles.root}>Game Controls</div>;
}
