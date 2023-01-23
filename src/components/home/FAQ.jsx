import React from "react";
import { parseHtml } from "../../helpers";
import { Detail, PageHeader, SlatePara } from "../Micro";

function FAQ({ response }) {
  return (
    <section className="section-container bg-white text-black">
      <div className="flex gap-6 md:gap-0 flex-col md:flex-row">
        <div className="flex-1">
          <div className="max-w-lg">
            <span className="red-header mb-8 text-xl">
              {response?.FAQs_Title}
            </span>
            <PageHeader
              title={response?.FAQs_Subtitle}
            />
            <SlatePara
              text={(
                <div>
                  {parseHtml(response?.FAQs_Description)}
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 md:gap-8 transition-all">
            {response?.FAQs_Ques?.map((faq, i) => (
              <Detail
                key={i}
                summary={faq?.title}
                detail={faq?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
