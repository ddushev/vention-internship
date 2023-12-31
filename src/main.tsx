import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import PATHS from "./utils/paths";

import ErrorBoundary from "./components/error/errorBoundary/errorBoundary";
import DefaultLayout from "./elements/defaultLayout";
import Page from "./elements/page/page";
import Home from "./components/home/home";
import ErrorPage from "./components/error/errorPage/errorPage";
import UserRouteGuard from "./components/guards/userRouteGuard";
import Profile from "./components/profile/profile";
import Products from "./components/products/products";

function AppContainer() {
  return (
    // <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        {/* Routes wrapped with default layout */}
        <DefaultLayout>
          <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route element={<UserRouteGuard />}>
              <Route path={PATHS.ABOUT} element={<Page title="About" />} />
              <Route path={`${PATHS.PRODUCTS}/:category`} element={<Products />} />
              <Route path={PATHS.PROFILE} element={<Profile />} />
              <Route path={PATHS.CART} element={<Page title="Cart" />} />
            </Route>
            <Route path={PATHS.SIGN_IN} element={<Page title="Sign In" />} />
            <Route path={PATHS.SIGN_UP} element={<Page title="Sign Up" />} />
            <Route path={PATHS.ERROR} element={<ErrorPage onResetError={() => {}} />} />
            <Route path="*" element={<Navigate to={PATHS.HOME} />} />
          </Routes>
        </DefaultLayout>
      </ErrorBoundary>
    </BrowserRouter>
    // </StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
);
// React + TS: https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
