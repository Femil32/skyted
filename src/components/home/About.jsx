/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from "react";
import ExpertSpeech from "../../assets/video/expert-speech.mp4";
import { PageHeader, SlatePara } from "../Micro";

function About() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl?.current.play();
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <section className="section-container bg-white text-black">
      <div>
        <h5 className=" text-red-500 font-semibold mb-5">About Skyted</h5>
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12">
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
          <div className="flex relative object-cover overflow-hidden justify-center items-center rounded-3xl w-full ring">
            <video
              className="w-full h-full"
              playsInline
              loop
              muted
              controls
              alt="ExpertSpeech"
              src={ExpertSpeech}
              ref={videoEl}
            />
          </div>
          <span className="py-2 px-2 block text-[#001432]/50 text-xs md:text-sm text-left">
            Have you ever dreamt to be  totally free to be able to say what you want to say?
          </span>
        </div>
      </div>

    </section>
  );
}

export default About;
