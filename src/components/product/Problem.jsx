import React from "react";
import { CustomIMG, PageHeader } from "../Micro";

// imgs
import WithMaskIMG from "../../assets/imgs/product/with-mask.png";
import WithoutMaskIMG from "../../assets/imgs/product/without-mask.png";

function Problem() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-10">
        <div className="row-span-full col-span-2 flex flex-col gap-4 ">
          <span className="block flex-1 mx-auto border-2 bg-black border-black " />
          <h1 className="product-label mx-auto text-6xl text-gray-200 font-radwave relative">Problem</h1>
        </div>
        <div className="row-span-full col-span-7">
          <div>
            <PageHeader title="With this warable, Skyted reaches from -25 to -40 dB sound reduction" />
            <h6>Sound simulation at 1 m - view top head</h6>
          </div>
          <div>
            <div className="flex  w-full justify-start items-start gap-14 mt-8">
              <div className="bg-[#001432]/10 p-4 rounded-3xl flex-1">
                <CustomIMG src={WithoutMaskIMG} alt="with-mask" className="w-96 p-16 flex justify-center items-center" />
                <span className="bg-white font-bold text-center block w-full py-3 rounded-2xl">Without Mask</span>
              </div>
              <div className="bg-[#001432]/10 p-4 rounded-3xl flex-1">
                <CustomIMG src={WithMaskIMG} alt="with-mask" className="w-96 p-16 flex justify-center items-center" />
                <span className="bg-white font-bold text-center block w-full py-3 rounded-2xl">With Mask</span>
              </div>
            </div>
            <h6 className="italic mt-3 text-gray-400">
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
