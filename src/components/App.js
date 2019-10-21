// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import usePlayer from '../hooks/usePlayer';
import useGameState from '../hooks/useGameState';
import PlayerControls from './PlayerControls';
import GameControls from './GameControls';
import styles from './App.css';

function App() {
  const [player1, player1Actions] = usePlayer();
  const [player2, player2Actions] = usePlayer();
  const [gameState, gameStateActions] = useGameState();

  return (
    <div className={styles.root}>
      <PlayerControls flip {...player1} {...player1Actions} />
      <GameControls {...gameState} {...gameStateActions} />
      <PlayerControls {...player2} {...player2Actions} />
    </div>
  );
}

export default hot(App);
