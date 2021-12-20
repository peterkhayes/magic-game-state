import TouchDisplay, { Props as TouchProps } from "./TouchDisplay";
import { CounterActions } from "../state/counter";

interface Props extends CounterActions, Omit<TouchProps, "targets"> {}

export default function Counter({
  increment,
  decrement,
  reset,
  ...touchDisplayProps
}: Props) {
  const targets = [
    { onTap: decrement, onLongPress: reset },
    { onTap: increment, onLongPress: reset },
  ];

  return <TouchDisplay {...touchDisplayProps} targets={targets} />;
}
