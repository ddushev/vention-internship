import { NavLink } from "react-router-dom";

import PATHS from "@/utils/paths";

import classNames from "classnames/bind";
import styles from "./header.module.scss";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.storeName}>Games Store</h1>
      <nav>
        <ul className={styles.navbarLinkItems}>
          <NavLink className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)} to={PATHS.HOME}>
            Home
          </NavLink>

          <NavLink className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)} to={PATHS.PRODUCTS}>
            Products
          </NavLink>

          <NavLink className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)} to={PATHS.ABOUT}>
            About
          </NavLink>

          <NavLink className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)} to={PATHS.SIGN_IN}>
            Sign In
          </NavLink>

          <NavLink className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)} to={PATHS.SIGN_UP}>
            Sign Up
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
