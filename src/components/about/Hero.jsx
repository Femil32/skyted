import React from "react";
import { CustomIMG } from "../Micro";
import Cabine from "../../assets/imgs/about/cabine.png";
import Chair from "../../assets/imgs/about/chair.png";

function Hero() {
  return (
    <section className="section-container pb-0">
      <div className=" w-full grid grid-cols-10 border-b-2 pb-24">
        <div className="col-span-5 overflow-hidden">
          <h1 className="text-5xl font-bold mb-24">
            <span className="text-twitter">Skyted</span>
            , the mask that
            {" "}
            <br />
            leaves you speechless
          </h1>
          <CustomIMG src={Cabine} alt="Cabine" className="" />
        </div>
        <div className="col-span-4 col-start-7 col-end-13 overflow-hidden">
          <CustomIMG src={Chair} alt="Cabine" className="" />
          <ul className="list-disc list-outside ml-6 mt-8 text-2xl space-y-5">
            <li>Inspired by the jet engine technology.</li>
            <li>Unique and innovative design</li>
            <li>Open air mask using completely disruptive technology with leap frog competition</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
