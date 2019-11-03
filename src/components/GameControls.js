// @flow
import React from 'react';
import styles from './GameControls.css';
import TouchDisplay from './TouchDisplay';
import useCounter from '../hooks/useCounter';
import useCoinFlip from '../hooks/useCoinFlip';

export default function GameControls() {
  const [storm, stormActions] = useCounter(0);
  const [flip, flipActions] = useCoinFlip();

  return (
    <div className={styles.gameControls}>
      <div className={styles.coinFlip}>
        <TouchDisplay targets={[{ onTap: flipActions.flip }]}>Flip Coin</TouchDisplay>
      </div>
      <div className={styles.stormCounter}>
        <TouchDisplay
          targets={[{ onTap: stormActions.increment, onLongPress: stormActions.reset }]}
        >
          Storm: {storm}
        </TouchDisplay>
      </div>
      {flip != null && (
        <div
          className={styles.coinFlipResultOverlay}
          onPointerDown={(e) => e.stopPropagation()}
          onPointerUp={(e) => {
            e.stopPropagation();
            flipActions.reset();
          }}
        >
          <div className={styles.coinFlipResultModal}>
            <div>{flip ? '⇧' : '⇩'}</div>
          </div>
        </div>
      )}
    </div>
  );
}
