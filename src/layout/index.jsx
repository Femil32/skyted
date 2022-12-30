import React, { useEffect, useRef } from "react";
import AOS from "aos";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Scroll from "../components/common/SmoothScroll";

function Layout() {
  const samt = useRef(0);
  const location = useLocation();

  const AOSfn = () => {
    if (samt.current <= 10) {
      samt.current += 1;
    } else {
      samt.current = 0;
      AOS.refresh();
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", AOSfn);
    return () => window.removeEventListener("scroll", AOSfn);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col h-screen" id="content">
      <Scroll />
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
