import logoutIcon from "images/icons/logout.png";
import userIcon from "images/icons/user.png";
import cartIcon from "images/icons/shoppingCart.png";

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { onRegisterSubmit, onLogout } from "@/api/apiAuth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuthState, setIsSignUpOpen } from "@/redux/authSlice";
import { AuthData } from "@/types";
import cx from "classnames";
import Input from "@/elements/input/input";
import PATHS from "@/utils/paths";
import SignInModal from "@/elements/modal/signInModal";
import useAuthForm from "../../hooks/useAuthForm";

import ProductsDropDown from "./productsDropDown/productsDropDown";
import Modal from "../../elements/modal/modal";

import styles from "./header.module.scss";

export default function Header() {
  const dispatch = useAppDispatch();
  const dispatchSetAuthState = (data: AuthData) => {
    dispatch(setAuthState(data));
  };
  const isSignUpOpen = useAppSelector((state) => state.authReduxState.isSignUpOpen);
  const authData = useAppSelector((state) => state.authReduxState.authData);

  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authData?.username) {
      setIsSignInOpen(false);
      dispatch(setIsSignUpOpen(false));
    }
    dispatch(setAuthState(authData));
  }, [authData, isSignInOpen]);

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
      dispatch(setIsSignUpOpen(false));
    }
    setIsSignInOpen(true);
  };

  const handleSignUpClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isSignInOpen) {
      setIsSignInOpen(false);
    }
    dispatch(setIsSignUpOpen(true));
  };

  const handleSignUpModalClose = () => {
    dispatch(setIsSignUpOpen(false));
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
              <ProductsDropDown isProductsDropdownVisible={isProductsDropdownVisible} authData={authData} />
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
              <NavLink className={({ isActive }) => cx(styles.linkItem, isActive && styles.active)} to={PATHS.PROFILE}>
                <img className={styles.icon} src={userIcon} alt="user-icon" />
                {authData?.username}
              </NavLink>
            )}
            {authData?.username && (
              <NavLink className={({ isActive }) => cx(styles.linkItem, styles.onlyIcon, isActive && styles.active)} to={PATHS.CART}>
                <img className={styles.icon} src={cartIcon} alt="cart-icon" />
                {0}
              </NavLink>
            )}
            {authData?.username && (
              <NavLink
                onClick={(event) => onLogout(event, dispatchSetAuthState, navigate)}
                className={cx(styles.linkItem, styles.onlyIcon)}
                to="#"
              >
                <img className={styles.icon} src={logoutIcon} alt="logout-icon" />
              </NavLink>
            )}
          </ul>
        </nav>
      </header>
      <SignInModal isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} authData={authData} />

      <Modal title="Registration" isOpen={isSignUpOpen} onClose={handleSignUpModalClose} onSubmit={onRegisterSubmitHandler}>
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
