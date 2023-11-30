import rockstar from "images/games/rockstar.png";
import epic from "images/games/epic.png";
import riot from "images/games/riot.png";

// eslint-disable-next-line import/no-extraneous-dependencies
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
        <li>
          <Link target="_blank" to="https://www.rockstargames.com/" className={styles.imageContainer}>
            <img className={styles.gameLogo} src={rockstar} alt="rockstar-games-icon" />
          </Link>
        </li>
        <li>
          <Link target="_blank" to="https://www.epicgames.com/site/en-US/home" className={styles.imageContainer}>
            <img className={styles.gameLogo} src={epic} alt="epic-games-icon" />
          </Link>
        </li>
        <li>
          <Link target="_blank" to="https://www.riotgames.com/en" className={styles.imageContainer}>
            <img className={styles.gameLogo} src={riot} alt="riot-games-icon" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
