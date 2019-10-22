// @flow
import React from 'react';
import TouchDisplay from './TouchDisplay';
import type { CounterActions } from '../hooks/useCounter';

type TouchDisplayConfig = React$ElementConfig<typeof TouchDisplay>;

type Props = {|
  ...$Rest<TouchDisplayConfig, { targets: * }>,
  ...CounterActions,
|};

export default function Counter({
  increment,
  decrement,
  reset,
  ...touchDisplayProps
}: Props) {
  const targets = [
    {
      onTap: decrement,
      onLongPress: reset,
    },
    {
      onTap: increment,
      onLongPress: reset,
    },
  ];

  return <TouchDisplay {...touchDisplayProps} targets={targets} />;
}
