import logoutIcon from "images/icons/logout.png";
import userIcon from "images/icons/user.png";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import cx from "classnames";
import { AuthData } from "@/types";
import Input from "@/elements/input/input";
import PATHS from "@/utils/paths";
import { onLoginSubmit, onRegisterSubmit, onLogout } from "@/api/apiAuth";
import useAuthForm from "../../hooks/useAuthForm";

import ProductsDropDown from "./productsDropDown/productsDropDown";
import Modal from "../modal/modal";

import styles from "./header.module.scss";

interface HeaderProps {
  authData: AuthData;
  setAuthData: Dispatch<SetStateAction<AuthData>>;
}

export default function Header({ authData, setAuthData }: HeaderProps) {
  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authData) {
      setIsSignInOpen(false);
      setIsSignUpOpen(false);
    }
  }, [authData]);

  const {
    values: loginValues,
    onChangeHandler: onLoginInputChange,
    onSubmit: onLoginSubmitHandler,
  } = useAuthForm({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmitHandler: onLoginSubmit,
    setAuthData,
  });

  const {
    values: registerValues,
    onChangeHandler: onRegisterInputChange,
    onSubmit: onRegisterSubmitHandler,
  } = useAuthForm({
    initialValues: {
      username: "",
      password: "",
      rePassword: "",
    },
    onSubmitHandler: onRegisterSubmit,
    setAuthData,
  });

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
            {!authData?.username && (
              <NavLink
                onClick={(event) => handleSignInClick(event)}
                className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)}
                to={PATHS.SIGN_IN}
              >
                Sign In
              </NavLink>
            )}
            {!authData?.username && (
              <NavLink
                onClick={(event) => handleSignUpClick(event)}
                className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)}
                to={PATHS.SIGN_UP}
              >
                Sign Up
              </NavLink>
            )}
            {authData?.username && (
              <NavLink className={styles.linkItem} to="#">
                <img className={styles.icon} src={userIcon} alt="user-icon" />
                {authData?.username}
              </NavLink>
            )}
            {authData?.username && (
              <NavLink onClick={(event) => onLogout(event, setAuthData, navigate)} className={styles.linkItem} to="#">
                <img className={styles.icon} src={logoutIcon} alt="shopping-cart" />
              </NavLink>
            )}
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
