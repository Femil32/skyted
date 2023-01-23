import React from "react";
import { CustomIMG } from "../Micro";
import Machine from "../../assets/imgs/about/machine.png";
import Chair from "../../assets/imgs/about/chair.png";
import { getImg, parseHtml } from "../../helpers";

function Hero({ response }) {
  return (
    <section className="section-container pb-0 mt-10 ">
      <div className="flex  justify-center items-start gap-9 max-md:flex-col">
        <div className="p-1 overflow-hidden max-w-lg ">
          <h1
            className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl lg:mb-16 md:mb-12 mb-10"
          >
            {parseHtml(response?.Title)}
          </h1>
          <CustomIMG
            src={getImg(response?.HeroLeftImage)}
            alt="Cabine"
            className="rounded-3xl w-full overflow-hidden flex-1 "
          />
        </div>
        <div className="p-1 overflow-hidden max-w-lg ">
          <CustomIMG
            src={getImg(response?.HeroRightImage)}
            alt="Cabine"
            className="rounded-3xl w-full  overflow-hidden"
          />
          <div className="custom-ul">
            {parseHtml(response?.HeroDescription)}
          </div>
        </div>
      </div>

      {/* <div className="w-full  grid sm:grid-cols-12 sm:gap-0 gap-10 border-b-2 lg:pb-24 sm:pb-16 pb-10">
        <div className="sm:col-span-6 overflow-hidden flex flex-col h-full ">
          <h1

            className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold lg:mb-16 md:mb-12 mb-10"
          >
            <span className="text-twitter">Skyted</span>
            , the mask that
            <br />
            leaves you speechless
          </h1>
          <CustomIMG

            src={Machine}
            alt="Cabine"
            className="rounded-3xl w-full overflow-hidden flex-1 "
          />
        </div>

        <div className="sm:col-span-4 sm:col-start-8 sm:col-end-13 overflow-hidden">
          <CustomIMG

            src={Chair}
            alt="Cabine"
            className="rounded-3xl w-full  overflow-hidden"
          />
          <ul className="list-disc list-outside ml-6 mt-8 xl:text-2xl lg:text-lg sm:text-base text-sm lg:space-y-5 space-y-4">
            <li >Inspired by the jet engine technology.</li>
            <li >Unique and innovative design</li>
            <li >
              Open air mask using completely disruptive technology with leap
              frog competition
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
