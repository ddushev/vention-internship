// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";

import PATHS from "@/utils/paths";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1>Games Store</h1>
      <nav>
        <ul className={styles.navbarLinkItems}>
          <NavLink className={({ isActive }) => (isActive ? `${styles.linkItem} ${styles.active}` : styles.linkItem)} to={PATHS.HOME}>
            Home
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? `${styles.linkItem} ${styles.active}` : styles.linkItem)} to={PATHS.PRODUCTS}>
            Products
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? `${styles.linkItem} ${styles.active}` : styles.linkItem)} to={PATHS.ABOUT}>
            About
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? `${styles.linkItem} ${styles.active}` : styles.linkItem)} to={PATHS.SIGN_IN}>
            Sign In
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? `${styles.linkItem} ${styles.active}` : styles.linkItem)} to={PATHS.SIGN_UP}>
            Sign Up
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
