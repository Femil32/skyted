import React from "react";
import OneraIMG from "../../assets/imgs/about/onera.png";
import VRGirlIMG from "../../assets/imgs/about/vr-girl.png";
import ImgData from "../common/ImgData";
import { CustomIMG } from "../Micro";

function Mission() {
  return (
    <section className="section-container">
      <ImgData
        title="Mission of Skyted"
        description={`Skyted scouts many new technologies to incorporate the best technology
        bricks to offer millions of users a safe and relaxed conversation where
        they are located. We will provide a full array of technology for the Future of
        Work as anyone has the right to create and control his own sound bubble.`}
        src={VRGirlIMG}
        alt="VRGirlIMG"
      />
      <div className="grid grid-cols-12 py-24">
        <div className="col-start-2 col-span-4 row-span-full bg-white z-10 flex justify-center items-center my-3 rounded-2xl ring">
          <CustomIMG src={OneraIMG} alt="onera" className="w-80" />
        </div>
        <div className="col-span-8 col-start-4 row-span-full bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-8 pl-80">
          <h2 className="font-bold text-3xl mb-4">ONERA Tech Support</h2>
          <span className="text-gray-500">The Frech aerospace lab is our key partner in this project.</span>
        </div>
      </div>
    </section>
  );
}

export default Mission;
