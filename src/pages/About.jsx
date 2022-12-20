import React from "react";
import FactsAndFigures from "../components/about/FactsAndFigures";
import Hero from "../components/about/Hero";
import MarketAndWhy from "../components/about/MarketAndWhy";
import Mission from "../components/about/Mission";
import Profiles from "../components/about/Profiles";

function About() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Mission />
      <Profiles />
      <FactsAndFigures />
      <MarketAndWhy />
    </main>
  );
}

export default About;
