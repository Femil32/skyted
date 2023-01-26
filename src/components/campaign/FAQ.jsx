import React from "react";
import { Detail, PageHeader } from "../Micro";

function FAQ({ response }) {
  return (
    <section className="section-container">
      <div className="lg:mx-16">
        <PageHeader title="Frenquently Asked Questions" className="text-center" />
        <div className="flex flex-col gap-4 md:gap-8 transition-all divide-y-2 lg:py-12 py-6">
          {response?.FaqQuestion?.map((faq, i) => <Detail key={i} summary={faq.Question} detail={faq.Answer} className="pt-8" detailClassname="w-full pr-8" />)}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
