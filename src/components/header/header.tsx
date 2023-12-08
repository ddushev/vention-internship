import { useState } from "react";
import { NavLink } from "react-router-dom";

import PATHS from "@/utils/paths";

import cx from "classnames";
import styles from "./header.module.scss";
import ProductsDropDown from "./productsDropDown/productsDropDown";

export default function Header() {
  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);
  const handleProductsHover = () => {
    setIsProductsDropdownVisible(true);
  };

  const handleProductsLeave = () => {
    setIsProductsDropdownVisible(false);
  };

  const handleProductClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.storeName}>Games Store</h1>
      <nav>
        <ul className={styles.navbarLinkItems}>
          <NavLink className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)} to={PATHS.HOME}>
            Home
          </NavLink>

          {/* Handle hover state for Products NavLink */}
          <NavLink
            className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)}
            to={PATHS.PRODUCTS}
            onClick={(event) => handleProductClick(event)}
            onMouseEnter={handleProductsHover}
            onMouseLeave={handleProductsLeave}
          >
            Products
            <ProductsDropDown isProductsDropdownVisible={isProductsDropdownVisible} />
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
