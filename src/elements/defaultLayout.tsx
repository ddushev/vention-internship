import Footer from "@/components/footer";
import Header from "@/components/header/header";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

// Define a layout component for routes with Header and Footer
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}