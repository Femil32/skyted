import React, { Suspense, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";

// importing aos
import "./App.css";
import "aos/dist/aos.css";
// Layout
import Layout from "./layout";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import CES from "./pages/CES";
import Contact from "./pages/Contact";
// pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import MediaKit from "./pages/MediaKit";
import Services from "./pages/Services";
import Temp from "./pages/Temp";

function App() {
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
    return () => window.removeEventListener("scroll");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense fallback="Loading ...">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ces" element={<CES />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media-kit" element={<MediaKit />} />
          <Route path="/campaign" element={<Campaign />} />
        </Route>
        <Route path="/temp" element={<Temp />} />
        <Route index path="*" element={<p> not found</p>} />
      </Routes>
    </Suspense>
  );
}

export default App;
