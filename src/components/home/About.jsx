/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import YoutubeEmbed from "../common/YoutubeEmbed";
import { PageHeader, SlatePara } from "../Micro";

function About() {
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl?.current.play();
  // };

  // useEffect(() => {
  //   attemptPlay();
  // }, []);

  return (
    <section className="section-container bg-white text-black">
      <div>
        <h5 data-aos="fade-in" className="red-header mb-5">About Skyted</h5>
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          <PageHeader data-aos="fade-in" title="Your Expert In Speech Privacy" className="max-w-md tracking-wide" />
          <SlatePara
            data-aos="fade-in"
            text={`Developed using breakthrough Aerospace technology, our “voice silencer”
          solution allows silent and confidential calls in real and virtual world.
          Perfect for the hybrid work, it offers “new nomad” total comfort and speech
          privacy in aircraft, open work spaces, public transport and in the
          virtual world as metaverse and online games.`}
            className="max-w-xl font-normal"
          />
        </div>
        <div data-aos="fade-in">
          <div className="flex relative object-cover overflow-hidden justify-center items-center rounded-3xl w-full ring">
            <YoutubeEmbed embedId="178emOV9HbQ" className="h-[80vh] w-full" />
          </div>
          <span className="py-2 px-2 block text-gray text-bse md:text-lg text-left md:mt-4">
            Have you ever dreamt to be  totally free to be able to say what you want to say?
          </span>
        </div>
      </div>

    </section>
  );
}

export default About;
