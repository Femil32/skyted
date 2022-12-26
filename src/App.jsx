import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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
import ProfileKit from "./pages/ProfileKit";
import Services from "./pages/Services";
import Temp from "./pages/Temp";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

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
          <Route path="/profile-kit" element={<ProfileKit />} />
          <Route path="/campaign" element={<Campaign />} />
        </Route>
        <Route path="/temp" element={<Temp />} />
        <Route index path="*" element={<p> not found</p>} />
      </Routes>
    </Suspense>
  );
}

export default App;
