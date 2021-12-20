import Counter from "./Counter";
import styles from "./ManaControls.module.css";
import {
  Color,
  COLORS,
  MANA_ICONS,
  MANA_BACKGROUND_COLORS,
} from "../types/mana";
import { useMana } from "../state/mana";
import times from "lodash/times";

export default function ManaControls() {
  const [mana, { increment, decrement, reset }] = useMana();

  return (
    <div className={styles.manaControls}>
      {COLORS.map((color) => (
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
              <ManaSymbols color={color} count={mana[color]} />
            </div>
          </Counter>
        </div>
      ))}
    </div>
  );
}

function ManaSymbols({ color, count }: { color: Color; count: number }) {
  if (count === 0) {
    return <PlaceholderManaSymbol color={color} />;
  } else if (count <= 12) {
    return (
      <>
        {times(count, (i) => (
          <ManaSymbol key={i} color={color} />
        ))}
      </>
    );
  } else {
    return (
      <>
        <ManaSymbol color={color} />
        <span className={styles.manaCount}>x {count}</span>
      </>
    );
  }
}

function PlaceholderManaSymbol({ color }: { color: Color }) {
  return (
    <img
      src={MANA_ICONS[color]}
      alt={color}
      className={styles.manaPlaceholder}
    />
  );
}

function ManaSymbol({ color }: { color: Color }) {
  return (
    <img src={MANA_ICONS[color]} alt={color} className={styles.manaSymbol} />
  );
}
