import React from "react";
import { getImg, parseHtml } from "../../helpers";
import { CtaBtn, CustomIMG, SlatePara } from "../Micro";

function Hero({ response }) {
  return (
    <section className="section-container">
      <div className="flex gap-2 py-12 w-full max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 md:w-3/5">
          <h6 className="red-header">
            {response?.HeroTitle}
          </h6>
          <h1
            className="text-5xl font-bold max-w-2xl leading-[55px]"
          >
            {response?.HeroSubtitle}
            {/* Come and try the mask at&nbsp;
            <span className="text-twitter">Skyted Booth</span> */}
          </h1>
          <div className="space-y-6 max-w-2xl">
            <SlatePara
              text={parseHtml(response?.HeroDescription)}
            />
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1ve3d4awVstp8AgUhJSwM0p7-MzT30dXJ/view?usp=share_link" target="_blank" rel="noreferrer">
              <CtaBtn
                text="CES Media Kit"
                className="text-white bg-twitter inline-block"
              />
            </a>
          </div>
        </div>
        <div
          className="flex justify-center items-center"
        >
          <CustomIMG src={getImg(response?.HeroImage)} alt="Cse2023" className="max-w-md" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
