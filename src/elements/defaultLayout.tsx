import { Dispatch, SetStateAction } from "react";

import { AuthData } from "@/types";

import Footer from "@/components/footer";
import Header from "@/components/header/header";

interface DefaultLayoutProps {
  children: React.ReactNode;
  authData: AuthData;
  setAuthData: Dispatch<SetStateAction<AuthData>>;
}

// Define a layout component for routes with Header and Footer
export default function DefaultLayout({ children, authData, setAuthData }: DefaultLayoutProps) {
  return (
    <>
      <Header authData={authData} setAuthData={setAuthData} />
      {children}
      <Footer />
    </>
  );
}
