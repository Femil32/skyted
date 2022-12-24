import React, { useState } from "react";
import { Detail, PageHeader, SlatePara } from "../Micro";

function FAQ() {
  const [allFaq, setAllFaq] = useState([
    {
      summary: "How does the pairing work?",
      detail: "The mask integrates a Pcb that can pair with any phones, computers and on the earbud side with any TWS such as Airpods, speaker or headset.",
    },
    {
      summary: "Where can we find Skyted Mask?",
      detail: "1 The mask integrates a Pcb that can pair with any phones, computers and on the earbud side with any TWS such as Airpods, speaker or headset.",
    },
    {
      summary: "What kind of sound reduction can we expect?",
      detail: "2 The mask integrates a Pcb that can pair with any phones, computers and on the earbud side with any TWS such as Airpods, speaker or headset.",
    },
    {
      summary: "Do you plan to launch a VIP Line?",
      detail: "3 The mask integrates a Pcb that can pair with any phones, computers and on the earbud side with any TWS such as Airpods, speaker or headset.",
    },
    {
      summary: "Do you plan to launch a VIP Line?",
      detail: "4 The mask integrates a Pcb that can pair with any phones, computers and on the earbud side with any TWS such as Airpods, speaker or headset.",
    },
  ]);

  return (
    <section className="section-container bg-white text-black">
      <div className="flex gap-6 md:gap-0 flex-col md:flex-row">
        <div className="flex-1">
          <div className="max-w-lg">
            <span className="red-header mb-8 text-xl">The FAQs</span>
            <PageHeader title="You want to know more about us?" />
            <SlatePara text="Everything you need to know about the product and billing.
              Can’t find the answer you’re looking for? Please check."
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 md:gap-8 transition-all">
            {allFaq.map((faq, i) => <Detail key={i} summary={faq.summary} detail={faq.detail} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
