import React from "react";
import ContactUS from "../components/home/ContactUS";
import Influencer from "../components/mediaKit/Influencer";
import Press from "../components/mediaKit/Press";
import Product from "../components/mediaKit/Product";

function MediaKit() {
  return (
    <main className="bg-white text-black">
      {/* <MeadiaKit /> */}
      <Press />
      <Product />
      <Influencer />
      <ContactUS />
    </main>
  );
}

export default MediaKit;
