import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Scroll from "../components/common/SmoothScroll";

function Layout() {
  const samt = useRef(0);
  const location = useLocation();

  const [scrollbar, setScrollbar] = useState(null);

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
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", AOSfn);
    return () => window.removeEventListener("scroll", AOSfn);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col h-screen">
      <Scroll scrollbar={scrollbar} setScrollbar={setScrollbar} />
      <Header scrollbar={scrollbar} setScrollbar={setScrollbar} />
      <div id="scrollbar" className="h-full">
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
