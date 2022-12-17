import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// pages
import About from "../components/home/About";
import ContactUS from "../components/home/ContactUS";
import Events from "../components/home/Events";
import Factors from "../components/home/Factors";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";

const Home = () => {
  useEffect(() => () => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 20, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-center", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Factors />
      <Events />
      <FAQ />
      <ContactUS />
    </main>
  );
};

export default Home;
