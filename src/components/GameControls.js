// @flow
import React from 'react';
import styles from './GameControls.css';
import Counter from './Counter';
import TouchDisplay from './TouchDisplay';
import useCounter from '../hooks/useCounter';
import useCoinFlip from '../hooks/useCoinFlip';

export default function GameControls() {
  const [storm, stormActions] = useCounter(0);
  const [flip, flipActions] = useCoinFlip();

  return (
    <div className={styles.gameControls}>
      <div className={styles.stormCounter}>
        <Counter orientation="horizontal" {...stormActions}>
          Storm: {storm}
        </Counter>
      </div>
      <div className={styles.coinFlip}>
        <TouchDisplay targets={[{ onTap: flipActions.flip }]}>Flip Coin</TouchDisplay>
      </div>
      {flip != null && (
        <div className={styles.coinFlipResultOverlay} onPointerUp={flipActions.reset}>
          <div className={styles.coinFlipResultModal}>
            <div>{flip ? '⇧' : '⇩'}</div>
          </div>
        </div>
      )}
    </div>
  );
}
