import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="overflow-hidden">
      {/* <NavBar isNavOpen={navState} setIsNavOpen={handleNav} /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
