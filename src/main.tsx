import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import PATHS from "./utils/paths";

import ErrorBoundary from "./components/error/errorBoundary/errorBoundary";
import DefaultLayout from "./elements/defaultLayout";
import Page from "./elements/page/page";
import Home from "./components/home/home";
import ErrorPage from "./components/error/errorPage/errorPage";
import { AuthData } from "./types";
import UserRouteGuard from "./components/guards/userRouteGuard";

function AppContainer() {
  const [authData, setAuthData] = useState<AuthData>({
    username: "",
  });
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  return (
    // <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        {/* Routes wrapped with default layout */}
        <DefaultLayout authData={authData} setAuthData={setAuthData} isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen}>
          <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route element={<UserRouteGuard authData={authData} setIsSignInOpen={setIsSignInOpen} />}>
              <Route path={PATHS.ABOUT} element={<Page title="About" />} />
              <Route path={`${PATHS.PRODUCTS}/:category`} element={<Page title="Products" />} />
              <Route path={PATHS.PROFILE} element={<Page title="Profile" />} />
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

ReactDOM.createRoot(document.getElementById("app")!).render(<AppContainer />);
// React + TS: https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
