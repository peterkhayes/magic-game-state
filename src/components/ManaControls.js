// @flow
import Counter from './Counter';
import React from 'react';
import styles from './ManaControls.css';
import useMana from '../hooks/useMana';

const MANA_BACKGROUND_COLORS = {
  colorless: 'rgb(155,122,103)',
  white: 'rgb(248,231,185)',
  blue: 'rgb(179,206,234)',
  black: 'rgb(166,159,157)',
  red: 'rgb(235,159,130)',
  green: 'rgb(166,211,182)',
};

export default function ManaControls() {
  const [mana, { increment, decrement, reset }] = useMana();

  return (
    <div className={styles.manaControls}>
      {['colorless', 'white', 'blue', 'black', 'red', 'green'].map((color) => (
        <div
          key={color}
          className={styles.manaControl}
          style={{
            backgroundColor: MANA_BACKGROUND_COLORS[color],
          }}
        >
          <Counter
            orientation="vertical"
            increment={() => increment(color)}
            decrement={() => decrement(color)}
            reset={reset}
          >
            {mana[color]}
          </Counter>
        </div>
      ))}
    </div>
  );
}
