/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { getYtID, parseHtml } from "../../helpers";
import YoutubeEmbed from "../common/YoutubeEmbed";
import { PageHeader, SlatePara } from "../Micro";

function About({ response }) {
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
        <h5 className="red-header mb-5">
          {response?.about_title}
        </h5>
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          <PageHeader
            title={response?.about_subtitle}
            className="max-w-md tracking-wide"
          />
          <SlatePara
            text={parseHtml(response?.about_detail)}
            className="max-w-xl font-normal"
          />
        </div>
        <div>
          <div className="flex relative object-cover overflow-hidden justify-center items-center rounded-3xl w-full ring">
            <YoutubeEmbed embedId={getYtID(response?.youtube_url)} className="h-[80vh] w-full" />
          </div>
          <span className="py-2 px-2 block text-gray text-bse md:text-lg text-left md:mt-4">
            {response?.freedom_text}
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
