import React from "react";
import { CustomIMG } from "../Micro";
import CeoIMG from "../../assets/imgs/about/ceo.png";
import { LeftArrowIcon } from "../AllSvgs";

function Profiles() {
  return (
    <section className="section-container blur-bg text-white">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-center xl:gap-24 lg:gap-16 gap-10 max-w-5xl mx-auto w-full">
        <div className="flex">
          <div className="backdrop-blur-lg bg-white/10 p-6 rounded-[250px] overflow-hidden">
            <CustomIMG src={CeoIMG} alt="CeoIMG" className="rounded-[250px] lg:w-96 w-72" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-md:items-center">
            <h6 className="text-twitter">About</h6>
            <h2 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl ">Stephane HERSEN</h2>
            <p className="text-gray-400">
              Designation:
              <span className="text-twitter">CEO</span>
            </p>
          </div>
          <div className="backdrop-blur-lg bg-gradient-to-r from-white/10 px-8 py-10 max-w-lg rounded-2xl lg:text-base text-sm">
            Seasoned CEO with Start -up Executive Job with tech companies
            as Head of Sales APAC for Airbus Singapore CTO.
          </div>
          <div className="flex gap-4 max-md:justify-center">
            <div className="cursor-pointer w-12 h-12 flex justify-center items-center backdrop-blur-xl bg-blue-900/20 rounded-full overflow-hidden">
              <LeftArrowIcon width={20} />
            </div>
            <div className="cursor-pointer w-12 h-12 rotate-180 flex justify-center items-center backdrop-blur-xl bg-blue-900/20 rounded-full overflow-hidden">
              <LeftArrowIcon width={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profiles;
