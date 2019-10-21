// @flow
import React from 'react';
import classNames from 'classnames';
import useTouchEvents from '../hooks/useTouchEvents';
import styles from './TouchTarget.css';

type Props = {|
  className?: string,
  darkTheme?: boolean,
  onTap: () => void,
  onLongPress: () => void,
|};

export default function TouchTarget({ className, darkTheme, onTap, onLongPress }: Props) {
  const [isPressed, eventHandlers] = useTouchEvents({ onTap, onLongPress });
  return (
    <div
      className={classNames(className, {
        [styles.touchTarget]: true,
        [styles.pressed]: isPressed,
        [styles.darkTheme]: darkTheme,
      })}
      {...eventHandlers}
    />
  );
}
