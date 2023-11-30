// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom";

import PATHS from "./utils/paths";

import Header from "./components/header/header";
import Page from "./elements/page";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATHS.HOME} element={<Page title="Home page" />} />
        <Route path={PATHS.ABOUT} element={<Page title="About page" />} />
        <Route path={PATHS.PRODUCTS} element={<Page title="Products page" />} />
        <Route path={PATHS.SIGN_IN} element={<Page title="Sign In page" />} />
        <Route path={PATHS.SIGN_UP} element={<Page title="Sign Up page" />} />
        <Route path="*" element={<Page title="Home page" />} />
      </Routes>
      <Footer />
    </>
  );
}
