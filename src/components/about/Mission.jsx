import React from "react";
import OneraIMG from "../../assets/imgs/about/onera.png";
import VRGirlIMG from "../../assets/imgs/about/vr-girl.png";
import ImgData from "../common/ImgData";
import { CustomIMG } from "../Micro";

function Mission() {
  return (
    <section className="section-wrapper  xl:py-[88px] lg:py-16 md:py-12 py-10">
      <div className="section-container">
        <ImgData
          data-aos="fade-in"
          title="Mission of Skyted"
          description={`Skyted scouts many new technologies to incorporate the best technology
        bricks to offer millions of users a safe and relaxed conversation where
        they are located. We will provide a full array of technology for the Future of
        Work as anyone has the right to create and control his own sound bubble.`}
          src={VRGirlIMG}
          alt="VRGirlIMG"
        />
        <div className="grid grid-cols-12 xl:py-24 lg:pt-16 md:pt-14 pt-12 pb-5">
          <div data-aos="fade-in" className="col-start-1 md:col-start-2 col-span-4 row-span-full bg-white z-10 flex justify-center items-center my-3 lg:my-4 rounded-2xl ring">
            <CustomIMG src={OneraIMG} alt="onera" className="w-80" />
          </div>
          <div data-aos="fade-in" className="col-span-9 md:col-span-8 md:col-start-5 md:col-end-12 col-start-4 row-span-full bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 pl-12 sm:p-8 sm:pl-20 md:pl-28 lg:p-16 lg:pl-36">
            <h2 className="font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg sm:mb-4 mb-2">ONERA Tech Support</h2>
            <span className="text-gray-500 lg:text-base text-sm">The Frech aerospace lab is our key partner in this project.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
