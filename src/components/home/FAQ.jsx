import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Detail, PageHeader, SlatePara } from "../Micro";

function FAQ() {
  const [allFaq, setAllFaq] = useState([
    {
      summary: "How does the pairing work?",
      detail: "The mask integrates a Pcb that can pair with any phone, computers and on the earbud side with any TWS such as Airpods, speaker or headset.",
    },
    {
      summary: "Where can we find Skyted Mask?",
      detail:
        "You can pre-order for our mask on Kickstarter. We plan to launch a Kickstarter campaign in March 2023.",
    },
    {
      summary: "What kind of sound reduction can we expect?",
      detail:
        "We will soon release sound absorption data calculated by the French Aerospace Lab, Onera.",
    },
    {
      summary: "Do you plan to launch a VIP Line?",
      detail:
        "Through voice frequency analysis, Skyted can custom design a bespoke product for any user.",
    },
  ]);

  return (
    <section className="section-container bg-white text-black">
      <div className="flex gap-6 md:gap-0 flex-col md:flex-row">
        <div className="flex-1">
          <div className="max-w-lg">
            <span data-aos="fade-in" className="red-header mb-8 text-xl">
              The FAQs
            </span>
            <PageHeader
              data-aos="fade-in"
              title="You want to know more about us?"
            />
            <SlatePara
              data-aos="fade-in"
              text={(
                <div>
                  Everything you want to know about is right here at your
                  fingertips. If we haven’t answered your question, email us at
                  &nbsp;
                  <a href="mailto:info@skyted.io">info@skyted.io</a>
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 md:gap-8 transition-all">
            {allFaq.map((faq, i) => (
              <Detail
                data-aos="fade-in"
                key={i}
                summary={faq.summary}
                detail={faq.detail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
