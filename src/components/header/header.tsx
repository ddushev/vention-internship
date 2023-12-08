import { useState } from "react";
import { NavLink } from "react-router-dom";

import PATHS from "@/utils/paths";

import cx from "classnames";
import Input from "@/elements/input/input";
import styles from "./header.module.scss";
import ProductsDropDown from "./productsDropDown/productsDropDown";
import Modal from "../modal/modal";

export default function Header() {
  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleProductsHover = () => {
    setIsProductsDropdownVisible(true);
  };

  const handleProductsLeave = () => {
    setIsProductsDropdownVisible(false);
  };

  const handleProductClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  const handleSignInClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsSignInOpen(true);
  };

  const handleSignUpClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsSignUpOpen(true);
  };
  return (
    <>
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

            <NavLink
              onClick={(event) => handleSignInClick(event)}
              className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)}
              to={PATHS.SIGN_IN}
            >
              Sign In
            </NavLink>

            <NavLink
              onClick={(event) => handleSignUpClick(event)}
              className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)}
              to={PATHS.SIGN_UP}
            >
              Sign Up
            </NavLink>
          </ul>
        </nav>
      </header>
      <Modal title="Authorization" isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)}>
        <Input label="Login" type="text" id="login" name="login" />
        <Input label="Password" type="password" id="password" name="password" />
      </Modal>
      <Modal title="Registration" isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
        <Input label="Login" type="text" id="login" name="login" />
        <Input label="Password" type="password" id="password" name="password" />
        <Input label="Repeat Password" type="rePassword" id="rePassword" name="rePassword" />
      </Modal>
    </>
  );
}
