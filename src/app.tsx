import { Route, Routes } from "react-router-dom";

import PATHS from "./utils/paths";

import Header from "./components/header/header";
import Page from "./elements/page";
import Footer from "./components/footer";
import ErrorBoundary from "./components/error/errorBoundary/errorBoundary";
import ErrorPage from "./components/error/errorPage/errorPage";
import SimulateError from "./components/simulateError";

// Define a layout component for routes with Header and Footer
function DefaultLayout({ children }: { children: React.ReactNode }) {
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
        {/* Temporary component and route for testing with simulated error*/}
        <Route path="/component-with-error" element={<SimulateError />} />

        {/* Default layout for most routes */}
        <Route
          path={PATHS.HOME}
          element={
            <DefaultLayout>
              <Page title="Home page" />
            </DefaultLayout>
          }
        />
        <Route
          path={PATHS.ABOUT}
          element={
            <DefaultLayout>
              <Page title="About page" />
            </DefaultLayout>
          }
        />
        <Route
          path={PATHS.PRODUCTS}
          element={
            <DefaultLayout>
              <Page title="Products page" />
            </DefaultLayout>
          }
        />
        <Route
          path={PATHS.SIGN_IN}
          element={
            <DefaultLayout>
              <Page title="Sign In page" />
            </DefaultLayout>
          }
        />
        <Route
          path={PATHS.SIGN_UP}
          element={
            <DefaultLayout>
              <Page title="Sign Up page" />
            </DefaultLayout>
          }
        />
        <Route path="/something-went-wrong" element={<ErrorPage onResetError={() => {}} />} />

        {/* Fallback route */}
        <Route
          path="*"
          element={
            <DefaultLayout>
              <Page title="Home page" />
            </DefaultLayout>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}
