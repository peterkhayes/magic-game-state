import classNames from "classnames";
import styles from "./PlayerControls.module.css";
import Counter from "./Counter";
import ManaControls from "./ManaControls";
import { useCounter } from "../state/counter";

const INITIAL_LIFE = 20;
const INITIAL_POISON = 0;

interface Props {
  flip?: boolean;
}

export default function PlayerControls({ flip }: Props) {
  const [life, lifeActions] = useCounter(INITIAL_LIFE, -Infinity);
  const [poison, poisonActions] = useCounter(INITIAL_POISON);

  return (
    <div className={classNames(styles.playerControls, flip && styles.flip)}>
      <div className={styles.lifeContainer}>
        <Counter
          orientation="horizontal"
          {...lifeActions}
          increment={lifeActions.increment}
        >
          <div className={styles.life}>{life}</div>
        </Counter>
      </div>
      <div className={styles.poisonContainer}>
        <Counter orientation="horizontal" {...poisonActions}>
          <div className={styles.poison}>{poison} Poison</div>
        </Counter>
      </div>
      <ManaControls />
    </div>
  );
}
