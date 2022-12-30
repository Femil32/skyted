import React from "react";
import { CustomIMG, PageHeader } from "../Micro";

// imgs
import WithMaskIMG from "../../assets/imgs/product/with-mask.png";
import WithoutMaskIMG from "../../assets/imgs/product/without-mask.png";

function Problem() {
  return (
    <section className="section-wrapper  pt-[150px] xl:pb-[93px] pb-10">
      <div className="section-container grid grid-cols-10">
        <div className="row-span-full col-span-2 flex flex-col gap-4 ">
          <span className="block flex-1 mx-auto border-2 bg-black border-black " />
          <h1 className="product-label mx-auto lg:text-6xl md:text-5xl text-4xl text-gray-200 font-radwave relative">Problem</h1>
        </div>
        <div className="row-span-full col-span-7">
          <div>
            <PageHeader title="With this warable, Skyted reaches from -25 to -40 dB sound reduction" />
            <h6 className="lg:text-base text-sm">Sound simulation at 1 m - view top head</h6>
          </div>
          <div>
            <div className="flex md:flex-nowrap flex-wrap w-full justify-start items-start xl:gap-14 lg:gap-8 gap-5 mt-8">
              <div className="bg-[#001432]/10 p-4 rounded-3xl md:flex-1">
                <CustomIMG src={WithoutMaskIMG} alt="with-mask" className="xl:w-96 w-68 xl:p-16 p-10 flex justify-center items-center" />
                <span className="bg-white font-bold text-center block w-full lg:py-3 py-2 rounded-2xl lg:text-base text-sm">Without Mask</span>
              </div>
              <div className="bg-[#001432]/10 p-4 rounded-3xl md:flex-1">
                <CustomIMG src={WithMaskIMG} alt="with-mask" className="xl:w-96 w-68 xl:p-16 p-10 flex justify-center items-center" />
                <span className="bg-white font-bold text-center block w-full lg:py-3 py-2 rounded-2xl lg:text-base text-sm">With Mask</span>
              </div>
            </div>
            <h6 className="italic mt-3 text-gray-400 lg:text-base text-sm">
              “Use voice is not intelligible behind a 50 cm circle around the wearer”
              - Official report
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
