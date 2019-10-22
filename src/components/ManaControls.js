// @flow
import Counter from './Counter';
import React from 'react';
import styles from './ManaControls.css';
import useMana from '../hooks/useMana';
import times from 'lodash/times';

import colorlessMana from '../images/colorless.svg';
import whiteMana from '../images/white.svg';
import blueMana from '../images/blue.svg';
import blackMana from '../images/black.svg';
import redMana from '../images/red.svg';
import greenMana from '../images/green.svg';

const MANA_BACKGROUND_COLORS = {
  colorless: 'rgb(155,122,103)',
  white: 'rgb(248,231,185)',
  blue: 'rgb(179,206,234)',
  black: 'rgb(166,159,157)',
  red: 'rgb(235,159,130)',
  green: 'rgb(166,211,182)',
};

const MANA_ICONS = {
  colorless: colorlessMana,
  white: whiteMana,
  blue: blueMana,
  black: blackMana,
  red: redMana,
  green: greenMana,
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
            <div className={styles.manaSymbols}>
              {mana[color] === 0 ? (
                <img src={MANA_ICONS[color]} className={styles.manaPlaceholder} />
              ) : (
                times(mana[color], (i) => (
                  <img key={i} src={MANA_ICONS[color]} className={styles.manaSymbol} />
                ))
              )}
            </div>
          </Counter>
        </div>
      ))}
    </div>
  );
}
