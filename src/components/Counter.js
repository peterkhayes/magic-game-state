// @flow
import React from 'react';
import classNames from 'classnames';
import TouchTarget from './TouchTarget';
import styles from './Counter.css';

type Props = {|
  orientation: 'horizontal' | 'vertical',
  children?: React$Node,
  darkTheme?: boolean,
  increment: () => void,
  decrement: () => void,
  reset: () => void,
|};

export default function Counter({
  orientation,
  children,
  darkTheme,
  increment,
  decrement,
  reset,
}: Props) {
  return (
    <div className={styles.counter}>
      <div
        className={classNames({
          [styles.targetContainer]: true,
          [styles[orientation]]: true,
        })}
      >
        <TouchTarget
          className={styles.target}
          darkTheme={darkTheme}
          onTap={decrement}
          onLongPress={reset}
        />
        <TouchTarget
          className={styles.target}
          darkTheme={darkTheme}
          onTap={increment}
          onLongPress={reset}
        />
      </div>
      {children}
    </div>
  );
}
Counter.defaultProps = {
  orientation: 'vertical',
};
