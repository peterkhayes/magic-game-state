import classNames from "classnames";
import { useTouchEvents } from "../utils/ui";
import styles from "./TouchDisplay.module.css";

interface TargetProps {
  onTap: () => void;
  onLongPress?: () => void;
}

export interface Props {
  children: React.ReactNode;
  orientation: "horizontal" | "vertical";
  targets: Array<TargetProps>;
}

export default function TouchDisplay({
  children,
  orientation,
  targets,
}: Props) {
  return (
    <div className={styles.touchDisplay}>
      <div
        className={classNames({
          [styles.touchTargets]: true,
          [styles[orientation]]: true,
        })}
      >
        {targets.map(({ onTap, onLongPress }, i) => (
          <TouchTarget key={i} onTap={onTap} onLongPress={onLongPress} />
        ))}
      </div>
      {children}
    </div>
  );
}
TouchDisplay.defaultProps = {
  orientation: "horizontal",
};

function TouchTarget({ onTap, onLongPress }: TargetProps) {
  const [isPressed, eventHandlers] = useTouchEvents({
    onTap,
    onLongPress: onLongPress || onTap,
  });

  return (
    <div
      className={classNames({
        [styles.touchTarget]: true,
        [styles.pressed]: isPressed,
      })}
      {...eventHandlers}
    />
  );
}
