import React from "react";
import { Link } from "react-router-dom";
import { CtaBtn, CustomIMG, SlatePara } from "../Micro";
import Cse2023 from "../../assets/imgs/Group 2506.png";

function Hero() {
  return (
    <section className="section-container">
      <div className="flex gap-2 py-12 w-full max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 md:w-3/5">
          <h6 data-aos="fade-in" data-aos-delay="500" className="red-header">
            Consumer Technology Association
          </h6>
          <h1
            data-aos="fade-in"
            data-aos-delay="500"
            className="text-5xl font-bold max-w-2xl leading-[55px]"
          >
            Come and try the mask at&nbsp;
            <span className="text-twitter">Skyted Booth</span>
          </h1>
          <div className="space-y-6 max-w-2xl">
            <SlatePara
              data-aos="fade-in"
              data-aos-delay="500"
              text={`Perfect for the hybrid work, this wearable offers “new nomads” total comfort
              and speech privacy in aircraft, transportation, open spaces and in the virtual
              world as metavers and online games.`}
            />
            <SlatePara
              className="text-black"
              data-aos="fade-in"
              data-aos-delay="500"
              text="Come and see us on booth 61211-10 (5th Jan’23-8th Jan’23) at Eureka Park to get a glimpse of our project. Please delete other line."
            />
            <SlatePara
              data-aos="fade-in"
              data-aos-delay="500"
              text={`Skyted has been selected by Airbus Dev, Aerospace Valley, Starburst VC and
              collaborates with CNRS and ESA for this project.`}
            />
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1ve3d4awVstp8AgUhJSwM0p7-MzT30dXJ/view?usp=share_link" target="_blank" rel="noreferrer">
              <CtaBtn
                data-aos="fade-in"
                data-aos-delay="500"
                text="CES Media Kit"
                className="text-white bg-twitter inline-block"
              />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="flex justify-center items-center"
        >
          <CustomIMG src={Cse2023} alt="Cse2023" className="max-w-md" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
