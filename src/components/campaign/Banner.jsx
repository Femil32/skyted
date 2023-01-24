import React from "react";
import { getImg } from "../../helpers";
import { CustomIMG } from "../Micro";

function Banner({ response }) {
  return (
    <section className="section-container">
      <div className="lg:px-16 lg:py-10 pt-12">
        <CustomIMG src={getImg(response?.HeroImage)} alt="campaign" className="lg:rounded-4xl rounded-2xl overflow-hidden w-full h-full" />
        <h4 className="text-lg lg:text-2xl mt-8">
          {response?.HeroDescription}
        </h4>
      </div>
    </section>
  );
}

export default Banner;
