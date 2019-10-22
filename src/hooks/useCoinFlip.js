// @flow
import { useReducer } from 'react';

type CoinFlipAction = 'flip' | 'reset';

export type CoinFlipActions = {|
  flip: () => void,
  reset: () => void,
|};

export default function useCoinFlip(): [?boolean, CoinFlipActions] {
  const [currentValue, dispatch] = useReducer(
    (value: ?boolean, action: CoinFlipAction) => {
      switch (action) {
        case 'flip':
          return Math.random() > 0.5 ? true : false;
        case 'reset':
          return null;
        default:
          return value;
      }
    },
    null,
  );

  const actions: CoinFlipActions = {
    flip: () => dispatch('flip'),
    reset: () => dispatch('reset'),
  };

  return [currentValue, actions];
}
