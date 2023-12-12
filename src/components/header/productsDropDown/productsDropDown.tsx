import { useNavigate } from "react-router-dom";

import PATHS from "@/utils/paths";
import cx from "classnames";
import { AuthData } from "@/types";

import styles from "./productsDropDown.module.scss";

interface ProductsDropDownProps {
  isProductsDropdownVisible: boolean;
  authData: AuthData;
}

export default function ProductsDropDown({ isProductsDropdownVisible, authData }: ProductsDropDownProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <ul
      className={cx(
        styles.productsDropDownContainer,
        isProductsDropdownVisible && styles.showDropDown,
        authData?.username && styles.loggedIn,
      )}
    >
      <button type="button" className={styles.linkItem} onClick={() => handleNavigation(`${PATHS.PRODUCTS}/pc`)}>
        PC
      </button>
      <button type="button" className={styles.linkItem} onClick={() => handleNavigation(`${PATHS.PRODUCTS}/ps5`)}>
        Playstation 5
      </button>
      <button type="button" className={styles.linkItem} onClick={() => handleNavigation(`${PATHS.PRODUCTS}/xbox`)}>
        XBox One
      </button>
    </ul>
  );
}
