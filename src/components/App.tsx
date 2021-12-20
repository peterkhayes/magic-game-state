import PlayerControls from "./PlayerControls";
import GameControls from "./GameControls";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.root}>
      <PlayerControls flip />
      <GameControls />
      <PlayerControls />
    </div>
  );
}
