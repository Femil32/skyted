import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// importing aos
import "aos/dist/aos.css";
import "./App.css";
// Layout
import Layout from "./layout";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import CES from "./pages/CES";
import Contact from "./pages/Contact";
// pages
import Home from "./pages/Home";
import MediaKit from "./pages/MediaKit";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Temp from "./pages/Temp";

function App() {
  return (
    <Suspense fallback="Loading...">
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
