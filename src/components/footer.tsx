import rockstarGamesLogo from "images/footer/rockstarGamesLogo.svg";
import epicGamesLogo from "images/footer/epicGamesLogo.svg";
import riotGamesLogo from "images/footer/riotGames.svg";

import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.footerContainer} center-text`}>
      <div className={styles.footerDetails}>
        <p className={styles.footerCreator}>Daniel.Dushev@ventionteams.com</p>
        <p className={styles.footerCompany}>Students Labs Vention 2023</p>
      </div>

      <ul className={styles.gamesList}>
        <li className={styles.listItems}>
          <Link target="_blank" to="https://www.rockstargames.com/" className={styles.imageContainer}>
            <img className={styles.gameLogo} src={rockstarGamesLogo} alt="rockstar-games-icon" />
          </Link>
        </li>
        <li className={styles.listItems}>
          <Link target="_blank" to="https://www.epicgames.com/site/en-US/home" className={styles.imageContainer}>
            <img className={styles.gameLogo} src={epicGamesLogo} alt="epic-games-icon" />
          </Link>
        </li>
        <li className={styles.listItems}>
          <Link target="_blank" to="https://www.riotgames.com/en" className={styles.imageContainerRiot}>
            <img className={styles.riotLogo} src={riotGamesLogo} alt="riot-games-icon" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
