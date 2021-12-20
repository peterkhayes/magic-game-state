import styles from "./GameControls.module.css";
import TouchDisplay from "./TouchDisplay";
import { useCounter } from "../state/counter";
import { useCoinFlip } from "../state/coin";
import { Player } from "../types/player";

export default function GameControls() {
  const [storm, stormActions] = useCounter(0);
  const [flip, flipActions] = useCoinFlip();

  return (
    <div className={styles.gameControls}>
      <div className={styles.coinFlip}>
        <TouchDisplay targets={[{ onTap: flipActions.flip }]}>
          Flip Coin
        </TouchDisplay>
      </div>
      <div className={styles.stormCounter}>
        <TouchDisplay
          targets={[
            { onTap: stormActions.increment, onLongPress: stormActions.reset },
          ]}
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
            <div>{flip === Player.One ? "⇧" : "⇩"}</div>
          </div>
        </div>
      )}
    </div>
  );
}
