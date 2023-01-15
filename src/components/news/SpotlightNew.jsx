import React from "react";
import { PageHeader } from "../Micro";
// img
import PlanGirlIMG from "../../assets/imgs/news/plan-girl.png";

function SpotlightNew() {
  return (
    <section className="section-container">
      <div className="container mx-auto">
        <div className="flex md:flex-nowrap flex-wrap justify-center md:gap-12 gap-8 items-center">
          <div
            className=" md:w-1/2"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <span className="block mb-4 text-gray-500">2023-01-04</span>
            <PageHeader title="Gamer Line – Silent Mask Headset" />
            <p className="max-w-lg xl:mt-12 lg:mt-8 mt-2 xl:text-xl sm:text-base text-sm text-gray-500">
              Skyted is currently designing a new headset designed to support passenger in
              their next travel. Combiget in touch wih us to promote how we could support Silent
              calls and silent games.
            </p>
          </div>
          <div
            className="md:w-1/2"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <div className="md:rounded-[50px] rounded-3xl overflow-hidden">
              <img src={PlanGirlIMG} alt="PlanGirlIMG" className=" overflow-hidden z-10 relative w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpotlightNew;
