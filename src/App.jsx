import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// Layout
import Layout from "./layout";
import About from "./pages/About";
import CES from "./pages/CES";
import Contact from "./pages/Contact";
// pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";

function App() {
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
        </Route>
        <Route index path="*" element={<p> not found</p>} />
      </Routes>
    </Suspense>
  );
}

export default App;
