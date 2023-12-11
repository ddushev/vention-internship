import { useState } from "react";
import { NavLink } from "react-router-dom";

import cx from "classnames";
import Input from "@/elements/input/input";
import PATHS from "@/utils/paths";
import { onLoginSubmit, onRegisterSubmit } from "@/api/apiAuth";
import useForm from "../hooks/useForm";

import ProductsDropDown from "./productsDropDown/productsDropDown";
import Modal from "../modal/modal";

import styles from "./header.module.scss";

export default function Header() {
  const {
    values: loginValues,
    onChangeHandler: onLoginInputChange,
    onSubmit: onLoginSubmitHandler,
  } = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmitHandler: onLoginSubmit,
  });

  const {
    values: registerValues,
    onChangeHandler: onRegisterInputChange,
    onSubmit: onRegisterSubmitHandler,
  } = useForm({
    initialValues: {
      username: "",
      password: "",
      rePassword: "",
    },
    onSubmitHandler: onRegisterSubmit,
  });

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
    if (isSignUpOpen) {
      setIsSignUpOpen(false);
    }
    setIsSignInOpen(true);
  };

  const handleSignUpClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isSignInOpen) {
      setIsSignInOpen(false);
    }
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
      <Modal title="Authorization" isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} onSubmit={onLoginSubmitHandler}>
        <Input label="Login" type="text" id="username" name="username" values={loginValues} onInputChange={onLoginInputChange} />
        <Input label="Password" type="password" id="password" name="password" values={loginValues} onInputChange={onLoginInputChange} />
      </Modal>
      <Modal title="Registration" isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} onSubmit={onRegisterSubmitHandler}>
        <Input label="Login" type="text" id="username" name="username" values={registerValues} onInputChange={onRegisterInputChange} />
        <Input
          label="Password"
          type="password"
          id="password"
          name="password"
          values={registerValues}
          onInputChange={onRegisterInputChange}
        />
        <Input
          label="Repeat Password"
          type="password"
          id="rePassword"
          name="rePassword"
          values={registerValues}
          onInputChange={onRegisterInputChange}
        />
      </Modal>
    </>
  );
}
