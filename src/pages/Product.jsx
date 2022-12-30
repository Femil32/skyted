import React from "react";
import ContactUS from "../components/home/ContactUS";
import Hero from "../components/product/Hero";
import Problem from "../components/product/Problem";
import Technology from "../components/product/Technology";

function Product() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Problem />
      <Technology />
      <ContactUS />
    </main>
  );
}

export default Product;
