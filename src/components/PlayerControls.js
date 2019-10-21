// @flow
import React from 'react';
import classNames from 'classnames';
import type { Player, Mana, Color, PlayerActions } from '../hooks/usePlayer';
import styles from './PlayerControls.css';
import Counter from './Counter';

type Props = {|
  flip?: boolean,
  ...Player,
  ...PlayerActions,
|};

export default function PlayerControls({
  flip,
  life,
  mana,
  incrementLife,
  decrementLife,
  reset,
  incrementMana,
  decrementMana,
  resetMana,
}: Props) {
  return (
    <div className={classNames(styles.root, flip && styles.flip)}>
      <div className={styles.lifeContainer}>
        <Counter
          orientation="horizontal"
          increment={incrementLife}
          decrement={decrementLife}
          reset={reset}
        >
          <div className={styles.life}>{life}</div>
        </Counter>
      </div>
      <div className={styles.manaContainer}>
        {['colorless', 'white', 'blue', 'black', 'red', 'green'].map((color) => (
          <ManaCounter
            key={color}
            mana={mana}
            color={color}
            increment={incrementMana}
            decrement={decrementMana}
            reset={resetMana}
          />
        ))}
      </div>
    </div>
  );
}

type ManaCounterProps = {|
  mana: Mana,
  color: Color,
  increment: (color: Color) => void,
  decrement: (color: Color) => void,
  reset: () => void, // resets all mana
|};

const MANA_BACKGROUND_COLORS = {
  colorless: '#888',
  white: '#eaeaea',
  blue: 'blue',
  black: 'black',
  red: 'red',
  green: 'green',
};

const MANA_USES_DARK_COLOR_THEME = {
  colorless: false,
  white: false,
  blue: true,
  black: true,
  red: true,
  green: true,
};

function ManaCounter({ mana, color, increment, decrement, reset }: ManaCounterProps) {
  return (
    <div
      className={styles.mana}
      style={{
        backgroundColor: MANA_BACKGROUND_COLORS[color],
        color: MANA_USES_DARK_COLOR_THEME[color] ? 'white' : 'black',
      }}
    >
      <Counter
        orientation="vertical"
        darkTheme={MANA_USES_DARK_COLOR_THEME[color]}
        increment={() => increment(color)}
        decrement={() => decrement(color)}
        reset={reset}
      >
        {mana[color]}
      </Counter>
    </div>
  );
}
