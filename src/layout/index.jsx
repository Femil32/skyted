import React, { useLayoutEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      content: ".content",
      smooth: 2,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
