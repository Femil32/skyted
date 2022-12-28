import React, { useState } from "react";
import { Detail, PageHeader } from "../Micro";

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      summary: "Where can we find Skyted Mask?",
      detail: "Yes. Skyted technology incorporates 100 of resonators and can be customize to any particular voice;We plan to customize masks to some customers with a wide selection of materials, Absorption power and mask design.",
    },
    {
      summary: "How does the pairing work?",
      detail: "Yes. Skyted technology incorporates 100 of resonators and can be customize to any particular voice;We plan to customize masks to some customers with a wide selection of materials, Absorption power and mask design.",
    },
    {
      summary: "Do you plan to launch a VIP Line?",
      detail: "Yes. Skyted technology incorporates 100 of resonators and can be customize to any particular voice;We plan to customize masks to some customers with a wide selection of materials, Absorption power and mask design.",
    },
    {
      summary: "What kind of sound reduction can we expect?",
      detail: "Yes. Skyted technology incorporates 100 of resonators and can be customize to any particular voice;We plan to customize masks to some customers with a wide selection of materials, Absorption power and mask design.",
    },
    {
      summary: "What is the product made of?",
      detail: "Yes. Skyted technology incorporates 100 of resonators and can be customize to any particular voice;We plan to customize masks to some customers with a wide selection of materials, Absorption power and mask design.",
    },
  ]);
  return (
    <section className="section-wrapper section-container">
      <div className="lg:mx-16 xl:mx-0">
        <PageHeader data-aos="fade-in" title="Frenquently Asked Questions" className="text-center" />
        <div className="flex flex-col gap-4 md:gap-8 transition-all divide-y-2 lg:py-12 py-6">
          {faqs.map((faq, i) => <Detail data-aos="fade-in" key={i} summary={faq.summary} detail={faq.detail} className="pt-8" detailClassname="w-full pr-8" />)}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
