// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom";

import PATHS from "./utils/paths";

import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Products from "./components/products/products";
import Footer from "./components/footer";
import SignIn from "./components/user/singIn/signIn";
import SignUp from "./components/user/signUp/signUp";
import Wrapper from "./components/wrapper";

export default function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.PRODUCTS} element={<Products />} />
          <Route path={PATHS.SIGN_IN} element={<SignIn />} />
          <Route path={PATHS.SIGN_UP} element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}
