// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom";

import PATHS from "./utils/paths";

import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Products from "./components/products/products";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.ABOUT} element={<About />} />
        <Route path={PATHS.PRODUCTS} element={<Products />} />
      </Routes>
    </>
  );
}
