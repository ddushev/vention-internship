import { useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { AuthData } from "@/types";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

// Define a layout component for routes with Header and Footer
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [authData, setAuthData] = useState<AuthData>({
    username: "",
  });
  return (
    <>
      <Header authData={authData} setAuthData={setAuthData} />
      {children}
      <Footer />
    </>
  );
}
