// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";

import PATHS from "@/utils/paths";

export default function Header() {
  return (
    <header>
      <h1>Games Market</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={PATHS.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={PATHS.PRODUCTS}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
