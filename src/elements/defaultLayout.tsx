import { AuthState } from "@/types";

import Footer from "@/components/footer";
import Header from "@/components/header/header";

interface DefaultLayoutProps {
  children: React.ReactNode;
  onAuthUser: (newState: AuthState) => void;
}

// Define a layout component for routes with Header and Footer
export default function DefaultLayout({ children, onAuthUser }: DefaultLayoutProps) {
  return (
    <>
      <Header onAuthUser={onAuthUser} />
      {children}
      <Footer />
    </>
  );
}
