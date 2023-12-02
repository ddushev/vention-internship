import { Route, Routes } from "react-router-dom";

import PATHS from "./utils/paths";

import Header from "./components/header/header";
import Page from "./elements/page";
import Footer from "./components/footer";
import ErrorBoundary from "./components/error/errorBoundary/errorBoundary";
import ErrorPage from "./components/error/errorPage/errorPage";
import SimulateError from "./components/simulateError";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

// Define a layout component for routes with Header and Footer
function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Routes wrapped with default layout */}
        <Route
          path="/*"
          element={
            <DefaultLayout>
              <Routes>
                <Route path={PATHS.HOME} element={<Page title="Home page" />} />
                <Route path={PATHS.ABOUT} element={<Page title="About page" />} />
                <Route path={PATHS.PRODUCTS} element={<Page title="Products page" />} />
                <Route path={PATHS.SIGN_IN} element={<Page title="Sign In page" />} />
                <Route path={PATHS.SIGN_UP} element={<Page title="Sign Up page" />} />
                <Route path={PATHS.ERROR} element={<ErrorPage onResetError={() => {}} />} />
                <Route path="*" element={<Page title="Home page" />} />
              </Routes>
            </DefaultLayout>
          }
        />
        {/* Temporary component and route for testing with simulated error*/}
        <Route path="/component-with-error" element={<SimulateError />} />
      </Routes>
    </ErrorBoundary>
  );
}
