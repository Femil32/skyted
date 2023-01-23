import React, { useState } from "react";
import { Detail, PageHeader } from "../Micro";

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      summary: "Where can we find Skyted Mask?",
      detail: "You can pre-order for our mask on Kickstarter. We plan to launch a Kickstarter campaign in March 2023.",
    },
    {
      summary: "How does the pairing work?",
      detail: "The mask integrates a Pcb that can pair with any phone, computers and on the earbud side with any TWS such as Airpods, speaker or headset.",
    },
    {
      summary: "Do you plan to launch a VIP Line?",
      detail: "Through voice frequency analysis, Skyted can custom design a bespoke product for any user.",
    },
    {
      summary: "What kind of sound reduction can we expect?",
      detail: "We will soon release sound absorption data calculated by the French Aerospace Lab, Onera.",
    },
    {
      summary: "What is the product made of?",
      detail: "Yes. Skyted technology incorporates 100 of resonators and can be customize to any particular voice;We plan to customize masks to some customers with a wide selection of materials, Absorption power and mask design.",
    },
  ]);
  return (
    <section className="section-container">
      <div className="lg:mx-16">
        <PageHeader title="Frenquently Asked Questions" className="text-center" />
        <div className="flex flex-col gap-4 md:gap-8 transition-all divide-y-2 lg:py-12 py-6">
          {faqs.map((faq, i) => <Detail key={i} summary={faq.summary} detail={faq.detail} className="pt-8" detailClassname="w-full pr-8" />)}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
