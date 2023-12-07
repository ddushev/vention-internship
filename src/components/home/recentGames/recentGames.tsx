import overwatch from "images/games/overwatch.jpg";
import minecraft from "images/games/minecraft.jpg";
import terraria from "images/games/terraria.jpg";

import SectionWrapper from "@/elements/sectionWrapper/sectionWrapper";

import styles from "./recentGames.module.scss";

export default function RecentGames() {
  return (
    <SectionWrapper>
      <li className={styles.recentGamesCardBox}>
        <img src={overwatch} alt="overwatch" />
        <h4 className={styles.recentGamesTitle}>PC</h4>
      </li>
      <li className={styles.recentGamesCardBox}>
        <img src={minecraft} alt="ps5" />
        <h4 className={styles.recentGamesTitle}>Playstation 5</h4>
      </li>
      <li className={styles.recentGamesCardBox}>
        <img src={terraria} alt="xbox" />
        <h4 className={styles.recentGamesTitle}>XBox One 5</h4>
      </li>
    </SectionWrapper>
  );
}
