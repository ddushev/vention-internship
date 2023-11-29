import "./header.scss";

// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";

import PATHS from "@/utils/paths";

export default function Header() {
  return (
    <header className="header-container">
      <h2>Games Market</h2>
      <nav>
        <ul className="navbar-link-items">
          <li className="link-item">
            <NavLink to={PATHS.HOME}>Home</NavLink>
          </li>
          <li className="link-item">
            <NavLink to={PATHS.ABOUT}>About</NavLink>
          </li>
          <li className="link-item">
            <NavLink to={PATHS.PRODUCTS}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
