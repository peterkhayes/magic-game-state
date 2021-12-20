import { useMemo, useReducer } from "react";
import { Player } from "../types/player";
import { assertNever } from "../utils/types";

export interface CoinFlipActions {
  flip(): void;
  reset(): void;
}

type CoinFlipAction = keyof CoinFlipActions;

export function useCoinFlip(): [Player | null, CoinFlipActions] {
  const [currentValue, dispatch] = useReducer(
    (value: Player | null, action: CoinFlipAction) => {
      switch (action) {
        case "flip":
          return Math.random() > 0.5 ? Player.One : Player.Two;
        case "reset":
          return null;
        default:
          assertNever(action);
      }
    },
    null
  );

  const actions: CoinFlipActions = useMemo(
    () => ({
      flip: () => dispatch("flip"),
      reset: () => dispatch("reset"),
    }),
    [dispatch]
  );

  return [currentValue, actions];
}
