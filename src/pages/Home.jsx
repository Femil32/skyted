import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
// pages
import About from "../components/home/About";
import ContactUS from "../components/home/ContactUS";
import Events from "../components/home/Events";
import Factors from "../components/home/Factors";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";

const Home = () => (
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

export default Home;
