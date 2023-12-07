import overwatch from "images/games/overwatch.jpg";

import styles from "./gameCard.module.scss";

export default function GameCard() {
  return (
    <li className={styles.gameCardBox}>
      <img src={overwatch} alt="overwatch" />
      <h4 className={styles.gameTitle}>PC</h4>
    </li>
  );
}
