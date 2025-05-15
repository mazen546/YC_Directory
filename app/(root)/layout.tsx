import React from "react";
import NavBar from "../../components/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="fonts-work-sans">
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
