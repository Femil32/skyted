import React from "react";
import { PageHeader } from "../Micro";

function FactsAndFigures() {
  const facts = [
    {
      title: "1 billion",
      description: `Daily meeting participants on main
        video confencing solutions (Zoom,
        Google, Microsoft, Cisco)`,
    },
    {
      title: "56%",
      description: `92 milion of US workforce is offered
      remote jobs (full & part-time)`,
    },
    {
      title: "10m",
      description: `(30 ft) distance within which a normal
      voice can be heard during a call`,
    },
  ];
  return (
    <section className="section-container">
      <div>
        <div className="flex flex-col justify-center items-center">
          <PageHeader title="Facts & figures" />
          <p className="text-gray-400 lg:text-base text-sm block relative max-md:text-center">Hybrid Work has a huge impact on the way we communicate</p>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-5 md:justify-between justify-center max-w-7xl mx-auto xl:my-16 lg:my-12 md:my-10 my-8">
          {facts.map((fact) => (
            <div className="max-w-xs text-center w-full">
              <h2 className="text-twitter xl:mb-10 md:mb-8 mb-5 font-bold xl:text-5xl lg:text-4xl sm:text-3xl text-2xl">{fact.title}</h2>
              <p className="xl:text-xl lg:text-lg md:text-base text-sm">{fact.description}</p>
            </div>
          ))}
        </div>
        <div className="flex md:flex-nowrap flex-wrap xl:gap-16 lg:gap-12 gap-10">
          <div className="md:flex-1 lg:p-10 p-5 xl:text-xl lg:text-lg md:text-base text-sm rounded-2xl bg-gradient-radial from-white to-cyan-100">
            <p className="max-w-sm tracking-wide md:leading-[35px] leading-[28px]">
              Millions of workers are handling calls in adverse conditions
              <br />
              <span className="red-header">Everywhere, Anytime.</span>
            </p>
          </div>
          <div className="md:flex-1 w-full lg:p-10 p-5 xl:text-xl lg:text-lg md:text-base text-sm rounded-2xl bg-gradient-radial from-white to-blue-100">
            <p className="max-w-sm tracking-wide md:leading-[35px] leading-[28px]">
              <span className="red-header">50% of meetings</span>
              {" "}
              are calls.
              <br />
              Voice is pollution post mike recording.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FactsAndFigures;
