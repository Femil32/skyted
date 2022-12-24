import React from "react";
import Influencer from "../components/profileKit/Influencer";
import MeadiaKit from "../components/profileKit/MeadiaKit";
import Press from "../components/profileKit/Press";
import Product from "../components/profileKit/Product";

function ProfileKit() {
  return (
    <main className="bg-white text-black">
      <MeadiaKit />
      <Press />
      <Product />
      <Influencer />
    </main>
  );
}

export default ProfileKit;
