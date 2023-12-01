// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";

interface ProductsDropDownProps {
  isDropDownOpen: boolean;
}

export default function ProductsDropDown({ isDropDownOpen }: ProductsDropDownProps) {
  return (
    isDropDownOpen && (
      <div className="products-dropdown">
        <div className="dropdown-content">
          <NavLink to="#">Game1</NavLink>
          <NavLink to="#">Game2</NavLink>
          <NavLink to="#">Game3</NavLink>
        </div>
      </div>
    )
  );
}
