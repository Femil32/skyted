import React from "react";
import Influencer from "../components/mediaKit/Influencer";
import MeadiaKit from "../components/mediaKit/MeadiaKit";
import Press from "../components/mediaKit/Press";
import Product from "../components/mediaKit/Product";

function MediaKit() {
  return (
    <main className="bg-white text-black">
      <MeadiaKit />
      <Press />
      <Product />
      <Influencer />
    </main>
  );
}

export default MediaKit;
