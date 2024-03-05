import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import PATHS from "./utils/paths";

import ErrorBoundary from "./components/error/errorBoundary/errorBoundary";
import DefaultLayout from "./elements/defaultLayout";
import Home from "./components/home/home";
import UserRouteGuard from "./components/guards/userRouteGuard";
import Loading from "./components/loading/loading";

const Profile = lazy(() => import("./components/profile/profile"));
const Products = lazy(() => import("./components/products/products"));
const Cart = lazy(() => import("./components/cart/cart"));
const Page = lazy(() => import("./elements/page/page"));
const ErrorPage = lazy(() => import("./components/error/errorPage/errorPage"));

window.onunhandledrejection = (e) => {
  console.warn(e.reason.toString());
  return true;
};

function AppContainer() {
  return (
    // <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        {/* Routes wrapped with default layout */}
        <DefaultLayout>
          <Suspense fallback={<Loading isLazyLoading />}>
            <Routes>
              <Route path={PATHS.HOME} element={<Home />} />
              <Route element={<UserRouteGuard />}>
                <Route path={PATHS.ABOUT} element={<Page title="About" />} />
                <Route path={PATHS.PRODUCTS} element={<Products />} />
                <Route path={PATHS.PROFILE} element={<Profile />} />
                <Route path={PATHS.CART} element={<Cart />} />
              </Route>
              <Route path={PATHS.ERROR} element={<ErrorPage onResetError={() => {}} />} />
              <Route path="*" element={<Navigate to={PATHS.HOME} />} />
            </Routes>
          </Suspense>
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
