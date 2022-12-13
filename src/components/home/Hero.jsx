import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
    <div ref={hero} className="hero section-container h-screen">
      <div className="flex justify-center items-center flex-col gap-6">
        {/* Headline */}
        <div className="h-full flex justify-center md:justify-start items-center flex-col">
          <div className="relative text-center text-5xl md:text-5xl text-gray-800 font-radwave-demo">
            <div className="w-full relative md:tracking-[-0.03em] font-bold md:leading-[76px] uppercase [background:linear-gradient(95.57deg,_#fff,_#a3a4a5_25.52%,_#fff_51.56%,_#a3a4a5_76.31%,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Silent Calls. Silent Games.
              </p>
              <p className="m-[0]">Everywhere. Anytime.</p>
            </div>
          </div>
        </div>

        {/* stats */}
        <article className="md:absolute md:bottom-24 md:left-24 relative flex justify-center items-center md:block text-center">
          <div className="md:mb-8 animate">
            <h2 className="state-digit">8k +</h2>
            <p className="gray-discription">number of zoom calls having every day here</p>
          </div>
          <div className="animate">
            <h2 className="state-digit">183k +</h2>
            <p className="gray-discription">Active users interact every month</p>
          </div>
        </article>

        {/* description */}
        <div className="md:absolute md:top-1/2 md:right-24 md:-translate-y-1/ data">
          <article className="md:text-left text-center max-w-xs">
            <p className="text-gray">
              Based in Toulouse Fr, Skyted’s team is obsessed with
              speechless calls. We are backed by Airbus dev. and the Europea...
            </p>
            <Link to="/" className="underline block">Get more</Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Hero;
