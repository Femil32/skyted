import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import MaskIMG from "../../assets/imgs/mask.png";

const Hero = () => {
  const hero = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".animate", ".data"], {
        y: -20,
        opacity: 0,
        stagger: 0.5,
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={hero}
      className="section-container hero-bg flex min-h-screen pb-0"
    >
      <div className="flex md:h-full w-full justify-center items-center flex-col gap-6">
        {/* Headline */}
        <div className="h-full w-full md:flex gap-6 items-center flex-col justify-end pt-16 hidden">
          <div className="relative mb-12 text-center font-radwave text-5xl md:text-6xl text-gray-800 font-radwave-demo">
            <div className="w-full relative md:tracking-[-0.03em] font-bold md:leading-[76px] uppercase [background:linear-gradient(95.57deg,_#fff,_#a3a4a5_25.52%,_#fff_51.56%,_#a3a4a5_76.31%,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Silent Calls. Silent Games.
              </p>
              <p className="m-[0]">Everywhere. Anytime.</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            {/* stats */}
            <article className="relative flex justify-center items-center md:block text-center pt-12">
              <div className="md:mb-8 animate">
                <h2 className="state-digit">56%</h2>
                <p className="gray-discription">
                  92 million US workforce is working remotely leading to virtual
                  meets in airport lounges, shared work spaces, at home etc
                </p>
              </div>
              <div className="animate">
                <h2 className="state-digit">1 Billion</h2>
                <p className="gray-discription">
                  daily participants on video conferencing solutions (Zoom,
                  Google, Microsoft etc).
                </p>
              </div>
            </article>

            {/* mask man */}
            <div className="w-32 lg:w-[32rem] object-contain">
              <img src={MaskIMG} alt="Maskman" className="w-full h-full" />
            </div>

            {/* description */}
            <div className="data h-full self-baseline">
              <article className="md:text-left text-center md:max-w-xs">
                <p className="font-light text-light-gray/60">
                  Based in Toulouse, France, we have a designed a disruptive
                  sound absorbing open air mask. We are backed by AIRBUS and the
                  European Space Agency to introduce inflight calls.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="h-full w-full flex gap-6 items-center flex-col justify-end pt-16 md:hidden">
          <div className="relative text-center font-radwave text-4xl  text-gray-800 font-radwave-demo">
            <div className="w-full relative font-bold  uppercase [background:linear-gradient(95.57deg,_#fff,_#a3a4a5_25.52%,_#fff_51.56%,_#a3a4a5_76.31%,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Silent Calls. Silent Games.
              </p>
              <p className="m-[0]">Everywhere. Anytime.</p>
            </div>
          </div>
          {/* description */}
          <div className="data h-full self-baseline">
            <article className=" text-center">
              <p className="font-light text-light-gray/60">
                Based in Toulouse, France, we have a designed a disruptive sound
                absorbing open air mask. We are backed by AIRBUS and the
                European Space Agency to introduce inflight calls.
              </p>
            </article>
          </div>
          <div className="flex justify-center items-center w-full gap-4">
            {/* stats */}
            <article className="relative flex flex-col justify-center items-center  text-center gap-4 py-4">
              <div className=" animate">
                <h2 className="state-digit">56%</h2>
                <p className="gray-discription">
                  92 million US workforce is working remotely leading to virtual
                  meets in airport lounges, shared work spaces, at home etc
                </p>
              </div>
              <div className="animate">
                <h2 className="state-digit">1B</h2>
                <p className="gray-discription">
                  daily participants on video conferencing solutions (Zoom,
                  Google, Microsoft etc).
                </p>
              </div>
            </article>
            {/* mask man */}
            <div className="w-68 lg:w-[32rem] object-contain">
              <img src={MaskIMG} alt="Maskman" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
