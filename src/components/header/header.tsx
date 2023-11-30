// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";

import PATHS from "@/utils/paths";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h2>Games Market</h2>
      <nav>
        <ul className={styles.navbarLinkItems}>
          <li className={styles.linkItem}>
            <NavLink to={PATHS.HOME}>Home</NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to={PATHS.PRODUCTS}>Products</NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to={PATHS.ABOUT}>About</NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to={PATHS.SIGN_IN}>Sign In</NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to={PATHS.SIGN_UP}>Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
