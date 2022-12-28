import React from "react";
import { CtaBtn, CustomIMG, SlatePara } from "../Micro";
import Cse2023 from "../../assets/imgs/ces/ces.png";

function Hero() {
  return (
    <section className="section-wrapper section-container">
      <div className="flex gap-2 py-12 w-full max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 md:w-3/5">
          <h6 data-aos="fade-in" data-aos-delay="500" className="red-header">Consumer Technology Association</h6>
          <h1 data-aos="fade-in" data-aos-delay="500" className="text-5xl font-bold max-w-2xl leading-[55px]">
            Come and try the mask at
            {" "}
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
              data-aos="fade-in"
              data-aos-delay="500"
              text={`Come and see on booth 61211-10 ( Friday, Saturday) at ViVa Tech to get
              a glimpse of our project.`}
            />
            <SlatePara
              data-aos="fade-in"
              data-aos-delay="500"
              text={`Skyted has been selected by Airbus Dev, Aerospace Valley, Starburst VC and
              collaborates with CNRS and ESA for this project.Come and see us on booth 61211-10 (6th Jan’23-7th Jan’23) at Eureka Park to get a glimpse of our project.`}
            />
          </div>
        </div>
        <div data-aos="fade-in" data-aos-delay="500" className="flex justify-center items-center">
          <CustomIMG src={Cse2023} alt="Cse2023" className="max-w-md" />
        </div>
      </div>
      <div className="md:space-x-3 max-md:space-y-3 mt-4 max-md:text-center">
        <CtaBtn data-aos="fade-in" data-aos-delay="500" text="CES Media Kit" className="text-white bg-twitter" />
        <CtaBtn data-aos="fade-in" data-aos-delay="500" text="Book an appintment with Calendy" className="text-white bg-yt" />
      </div>
    </section>
  );
}

export default Hero;
