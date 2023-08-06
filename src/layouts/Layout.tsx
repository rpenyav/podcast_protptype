// En /src/layouts/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  page: "PodcastView" | "PodcastSearch";
}

const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  return (
    <div>
      <Header page={page} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
