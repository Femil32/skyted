import React from "react";
import CesForm from "../components/ces/CesForm";
import Hero from "../components/ces/Hero";
import Influencer from "../components/ces/Influencer";
import Users from "../components/ces/Users";

function CES() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <div className="bg-black text-white">
        <Users />
        <Influencer />
        <CesForm />
      </div>
    </main>
  );
}

export default CES;
