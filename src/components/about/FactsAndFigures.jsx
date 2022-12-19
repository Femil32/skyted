import React from "react";
import { PageHeader } from "../Micro";

function FactsAndFigures() {
  const facts = [
    {
      title: "1 Billion",
      description: `Daily meeting participants on main
        video confencing solutions (Zoom,
        Google, Microsoft, Cisco)`,
    },
    {
      title: "57%",
      description: `90 milion of US workforce is offered
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
          <span className="text-gray-400">Hybrid Work has a huge impact on the way we communicate</span>
        </div>
        <div className="flex justify-between max-w-7xl my-16">
          {facts.map((fact) => (
            <div className="max-w-xs text-center w-full">
              <h2 className="text-twitter mb-10 font-bold text-5xl">{fact.title}</h2>
              <p className="text-xl">{fact.description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-16">
          <div className="flex-1 p-10 text-xl rounded-2xl bg-gradient-radial from-white to-cyan-100">
            <p className="max-w-sm tracking-wide leading-[35px]">
              Millions of workers are handling calls in adverse conditions
              <br />
              <span className="red-header">Everywhere, Anytime.</span>
            </p>
          </div>
          <div className="flex-1 p-10 text-xl rounded-2xl bg-gradient-radial from-white to-blue-100">
            <p className="max-w-sm tracking-wide leading-[35px]">
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
