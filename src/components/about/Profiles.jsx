import React from "react";
import CeoIMG from "../../assets/imgs/about/ceo.png";
import { getImg } from "../../helpers";
import { CustomIMG } from "../Micro";

function Profiles({ response }) {
  return (
    <section className="section-container blur-bg text-white">
      {response?.AboutOwnerList?.map((info) => (
        <div className="flex md:flex-nowrap flex-wrap justify-center items-center xl:gap-24 lg:gap-16 gap-10 max-w-5xl mx-auto w-full">
          <div className="flex">
            <div
              className="backdrop-blur-lg bg-white/10 p-6 rounded-[250px] overflow-hidden"
            >
              <CustomIMG
                src={getImg(info?.OwnerImage)}
                alt="CeoIMG"
                className="rounded-[250px] lg:w-96 w-72 h-[32rem]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 max-md:items-center">
              <h6 className="text-twitter">
                {info?.InformationTitle}
              </h6>
              <h2
                className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl "
              >
                {info?.OwnerName}
              </h2>
              <p className="text-gray-400">
                {info?.OwnerDesignation.split(":")[0]}
                {" "}
                :
                {" "}
                <span className="text-twitter">{info?.OwnerDesignation.split(":")[1]}</span>
              </p>
            </div>
            <div
              className="backdrop-blur-lg bg-gradient-to-r from-white/10 px-8 py-10 max-w-lg rounded-2xl lg:text-base text-sm"
            >
              {info?.OwnerAbout}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Profiles;
