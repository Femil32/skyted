import React from "react";
// imgs
import MaskIMG from "../../assets/imgs/product/mask.png";
import { CustomIMG } from "../Micro";

function Hero() {
  return (
    <section className="hidden section-wrapper overflow-hidden bg-[url('src/assets/imgs/product/hero-bg.png')] mt-[88px] bg-cover bg-no-repeat bg-center h-[calc(100vh-88px)] p-0">
      <div className="w-full h-full">
        <div className="flex justify-center items-center py-16 relative">
          <CustomIMG src={MaskIMG} alt="mask" className="w-[40rem]" />
          <div className="absolute top-[60%] w-44 before:absolute before:w-full before:content-[''] before:outline-dashed before:outline-red-600 before:border-dashed">
            <span className="block text-xl font-medium">220g Weight</span>
          </div>
        </div>
        {/* <div>
          <div className="tank">
            <div className="bottom" />
            <div className="middle" />
            <div className="top" />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
