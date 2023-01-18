import React from "react";
import Form from "../components/campaign/Form";

// pages
import About from "../components/home/About";
import ContactUS from "../components/home/ContactUS";
import Events from "../components/home/Events";
import Factors from "../components/home/Factors";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import MeadiaOutlets from "../components/home/MeadiaOutlets";
import Patners from "../components/home/Patners";

const Home = () => (
  <main>
    <Hero />
    <Form setMargins />
    <Patners />
    <About />
    <MeadiaOutlets />
    <Features />
    <Factors />
    <Events />
    <FAQ />
    <ContactUS />
  </main>
);

export default Home;
