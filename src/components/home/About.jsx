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
        <h5 data-aos="fade-in" className="red-header mb-5">
          About Skyted
        </h5>
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          <PageHeader
            data-aos="fade-in"
            title="Your Expert In Speech Privacy"
            className="max-w-md tracking-wide"
          />
          <SlatePara
            data-aos="fade-in"
            text={`Developed using breakthrough Aerospace technology, our “voice silencer” solution provides absolute
            soundlessness for private and confidential calls in both the real and virtual worlds. Perfect for the hybrid
            workplace, Skyted provides the “new nomads” with total comfort and speech privacy in aircrafts, open
            workspaces and on public transport as well as in the virtual world through both the Metaverse and
            online gaming.
            `}
            className="max-w-xl font-normal"
          />
        </div>
        <div data-aos="fade-in">
          <div className="flex relative object-cover overflow-hidden justify-center items-center rounded-3xl w-full ring">
            <YoutubeEmbed embedId="178emOV9HbQ" className="h-[80vh] w-full" />
          </div>
          <span className="py-2 px-2 block text-gray text-bse md:text-lg text-left md:mt-4">
            Have you ever dreamt of talking to people with total freedom?
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
