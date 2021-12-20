import { useReducer } from "react";
import { increment, decrement } from "./counter";
import { Color } from "../types/mana";
import { assertNever } from "../utils/types";

type Mana = Record<Color, number>;

const INITIAL_MANA: Mana = {
  [Color.Colorless]: 0,
  [Color.White]: 0,
  [Color.Blue]: 0,
  [Color.Black]: 0,
  [Color.Red]: 0,
  [Color.Green]: 0,
};

export interface ManaActions {
  increment(color: Color): void;
  decrement(color: Color): void;
  reset(): void;
}

type ManaAction =
  | { type: "increment"; color: Color }
  | { type: "decrement"; color: Color }
  | { type: "reset" };

export function useMana(): [Mana, ManaActions] {
  const [currentMana, dispatch] = useReducer(
    (mana: Mana, action: ManaAction) => {
      switch (action.type) {
        case "increment":
          return { ...mana, [action.color]: increment(mana[action.color]) };
        case "decrement":
          return { ...mana, [action.color]: decrement(mana[action.color], 0) };
        case "reset":
          return INITIAL_MANA;
        default:
          assertNever(action);
      }
    },
    INITIAL_MANA
  );

  const actions: ManaActions = {
    increment: (color) => dispatch({ type: "increment", color }),
    decrement: (color) => dispatch({ type: "decrement", color }),
    reset: () => dispatch({ type: "reset" }),
  };

  return [currentMana, actions];
}
