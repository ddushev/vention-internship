import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Component /* , StrictMode */ } from "react";
import ReactDOM from "react-dom/client";

import PATHS from "./utils/paths";

import Page from "./elements/page/page";
import Home from "./components/home/home";
import ErrorBoundary from "./components/error/errorBoundary/errorBoundary";
import ErrorPage from "./components/error/errorPage/errorPage";
import DefaultLayout from "./elements/defaultLayout";

interface Props {}
interface State {}

class AppContainer extends Component<Props, State> {
  render() {
    return (
      // <StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            {/* Routes wrapped with default layout */}
            <Route
              path="/*"
              element={
                <DefaultLayout>
                  <Routes>
                    <Route path={PATHS.HOME} element={<Home />} />
                    <Route path={PATHS.ABOUT} element={<Page title="About page" />} />
                    <Route path={`${PATHS.PRODUCTS}/:category`} element={<Page title="Products page" />} />
                    <Route path={PATHS.SIGN_IN} element={<Page title="Sign In page" />} />
                    <Route path={PATHS.SIGN_UP} element={<Page title="Sign Up page" />} />
                    <Route path={PATHS.ERROR} element={<ErrorPage onResetError={() => {}} />} />
                    <Route path="*" element={<Navigate to={PATHS.HOME} />} />
                  </Routes>
                </DefaultLayout>
              }
            />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
      // </StrictMode>
    );
  }
}

ReactDOM.createRoot(document.getElementById("app")!).render(<AppContainer />);
// React + TS: https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
