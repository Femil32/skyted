import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const hero = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".animate", ".ss"], {
        y: -20,
        opacity: 0,
        stagger: 0.5,
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={hero} className="hero section-container h-screen">
      {/* Headline */}
      <div className="h-full flex justify-start items-center flex-col">
        {/* <article className="animate text-6xl uppercase text-center font-bold mb-12">
          <h1>Silent Calls. Silent Games.</h1>
          <h1>Everywhere. Anytime.</h1>
        </article> */}
        <div className="relative w-[1097px] h-[156px] text-center text-5xl text-gray-800 font-radwave-demo">
          <div className="absolute top-[4px] left-[0px] font-bold tracking-[-0.03em] leading-[76px] uppercase inline-block [filter:blur(8px)]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Silent Calls. Silent Games.
            </p>
            <p className="m-[0]">Everywhere. Anytime.</p>
          </div>
          <div className="relative tracking-[-0.03em] font-bold leading-[76px] uppercase [background:linear-gradient(95.57deg,_#fff,_#a3a4a5_25.52%,_#fff_51.56%,_#a3a4a5_76.31%,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Silent Calls. Silent Games.
            </p>
            <p className="m-[0]">Everywhere. Anytime.</p>
          </div>
        </div>
        <div className="relative object-cover w-64">
          {/* <img src={MaskMan} alt="product" className="w-full h-full" /> */}
          <div className="absolute top-16 w-[500px] h-[500px] left-1/2 z-[-1] -translate-x-1/2 rounded-full bg-transparent flex justify-center items-center">
            <span className="absolute w-full h-full block rounded-full bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] border">
              <span className="bg-transparent block" />
            </span>
            {/* <span className='absolute w-[75%] h-[75%]
           block rounded-full bg-transparent border'></span> */}
          </div>
        </div>
      </div>

      {/* stats */}
      <article className="absolute bottom-24 left-24">
        <div className="mb-8 animate">
          <h2 className="state-digit">8k +</h2>
          <p className="gray-discription">number of zoom calls having every day here</p>
        </div>
        <div className="animate">
          <h2 className="state-digit">183k +</h2>
          <p className="gray-discription">Active users interact every month</p>
        </div>
      </article>

      {/* description */}
      <div className="absolute top-1/2 right-24 -translate-y-1/2 ss">
        <article className="text-left max-w-xs">
          <p className="text-gray">
            Based in Toulouse Fr, Skyted’s team is obsessed with
            speechless calls. We are backed by Airbus dev. and the Europea...
          </p>
          <Link to="/" className="underline block">Get more</Link>
        </article>
      </div>
    </div>
  );
};

export default Hero;
