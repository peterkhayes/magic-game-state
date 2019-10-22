// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import PlayerControls from './PlayerControls';
import GameControls from './GameControls';
import styles from './App.css';

function App() {
  return (
    <div className={styles.root}>
      <PlayerControls flip />
      <GameControls />
      <PlayerControls />
    </div>
  );
}

export default hot(App);
