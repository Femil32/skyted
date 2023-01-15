import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";

// importing aos
import "./App.css";
import "aos/dist/aos.css";
// Layout
import Layout from "./layout";
import Loader from "./components/common/Loader";

const About = lazy(() => import("./pages/About"));
const Campaign = lazy(() => import("./pages/Campaign"));
const CES = lazy(() => import("./pages/CES"));
const Contact = lazy(() => import("./pages/Contact"));
// pages
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const MediaKit = lazy(() => import("./pages/MediaKit"));
const Services = lazy(() => import("./pages/Services"));
const Temp = lazy(() => import("./pages/Temp"));
const News = lazy(() => import("./pages/News"));
const SingleBlog = lazy(() => import("./pages/SingleBlog"));

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense fallback={<Loader />}>
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
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleBlog />} />
        </Route>
        <Route path="/temp" element={<Temp />} />
        <Route index path="*" element={<p> not found</p>} />
      </Routes>
    </Suspense>
  );
}

export default App;
