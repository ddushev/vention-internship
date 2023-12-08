import { useNavigate } from "react-router-dom";
import PATHS from "@/utils/paths";
import cx from "classnames";
import styles from "./productsDropDown.module.scss";

interface ProductsDropDownProps {
  isProductsDropdownVisible: boolean;
}

export default function ProductsDropDown({ isProductsDropdownVisible }: ProductsDropDownProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <ul className={cx(styles.productsDropDownContainer, isProductsDropdownVisible && styles.showDropDown)}>
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
