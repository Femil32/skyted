import React from "react";
import { getImg, parseHtml } from "../../helpers";
import ImgData from "../common/ImgData";
import { CustomIMG } from "../Micro";

function Mission({ response, boxResponse }) {
  return (
    <section className="section-container xl:py-[88px] lg:py-16 md:py-12 py-10">
      <ImgData
        title={response?.Title}
        description={parseHtml(response?.Description)}
        src={getImg(response?.Image)}
        alt="VRGirlIMG"
      />
      <div className="grid grid-cols-12 xl:py-24 lg:pt-16 md:pt-14 pt-12 pb-5">
        <div
          className="col-start-1 md:col-start-2 col-span-4 row-span-full bg-white z-10 flex justify-center items-center my-3 lg:my-4 rounded-2xl ring"
        >
          <CustomIMG src={getImg(boxResponse?.CompanyImage)} alt="onera" className="w-80" />
        </div>
        <div
          className="col-span-9 md:col-span-8 md:col-start-5 md:col-end-12  ml-12 col-start-4 row-span-full bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 pl-12 sm:p-8 sm:pl-20 md:pl-28 lg:p-16 lg:pl-36"
        >
          <h2 className="font-bold xl:text-3xl lg:text-2xl md:text-xl  text-lg sm:mb-4 mb-2">
            {boxResponse?.CompanyTitle}
          </h2>
          <span className="text-gray-500 lg:text-base text-sm">
            {boxResponse?.CompanyDescription}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Mission;
