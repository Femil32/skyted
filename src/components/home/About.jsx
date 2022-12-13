import React from "react";
import { PageHeader, SlatePara } from "../Micro";
import HeadPhoneImg from "../../assets/imgs/headphone.png";
import { PlayIcon } from "../AllSvgs";

function About() {
  return (
    <section className="section-container bg-white text-black">
      <div>
        <h5 className="text-md text-red-500 font-semibold mb-5">About Skyted</h5>
        <div className="flex justify-between mb-12">
          <PageHeader title="Your Expert In Speech Privacy" className="max-w-md" />
          <SlatePara
            text={`Developed using breakthrough Aerospace technology, our “voice silencer”
          solution allows silent and confidential calls in real and virtual world.
          Perfect for the hybrid work, it offers “new nomad” total comfort and speech
          privacy in aircraft, open work spaces, public transport and in the
          virtual world as metaverse and online games.`}
            className="max-w-xl"
          />
        </div>
        <div className="">
          <div className="flex relative object-cover overflow-hidden justify-center items-center rounded-3xl w-full h-96 border">
            <img src={HeadPhoneImg} alt="HeadPhoneImg" className="w-full h-full absolute top-0 left-0" />
            <span className="block z-10">
              <PlayIcon width="62" />
            </span>
          </div>
          <caption className="py-2 block text-[#001432]/50 text-sm text-left">
            Have you ever dreamt to be  totally free to be able to say what you want to say?
          </caption>
        </div>
      </div>

    </section>
  );
}

export default About;
