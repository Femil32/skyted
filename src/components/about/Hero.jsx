import React from "react";
import { CustomIMG } from "../Micro";
import Machine from "../../assets/imgs/about/machine.png";
import Chair from "../../assets/imgs/about/chair.png";

function Hero() {
  return (
    <section className="section-container pb-0 pt-20">
      <div className=" w-full grid xl:grid-cols-10 sm:grid-cols-10 sm:gap-0 gap-10 border-b-2 lg:pb-24 sm:pb-16 pb-10">
        <div className="sm:col-span-5 overflow-hidden">
          <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold xl:mb-24 lg:mb-16 mg:mb-12 mb-10">
            <span className="text-twitter">Skyted</span>
            , the mask that
            {" "}
            <br />
            leaves you speechless
          </h1>
          <CustomIMG src={Machine} alt="Cabine" className="sm:h-auto h-[350px] rounded-3xl overflow-hidden" />
        </div>
        <div className="sm:col-span-4 sm:col-start-7 sm:col-end-13 overflow-hidden">
          <CustomIMG src={Chair} alt="Cabine" className="sm:h-auto h-[350px] rounded-3xl overflow-hidden" />
          <ul className="list-disc list-outside ml-6 mt-8 xl:text-2xl lg:text-lg sm:text-base text-sm lg:space-y-5 space-y-4">
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
