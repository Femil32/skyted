import React, { useState } from "react";
import { CtaBtn, CustomIMG, PageHeader } from "../Micro";

// imgs
import ThumsUpIMG from "../../assets/imgs/campaign/thumbs-up.png";
import HandShakeIMG from "../../assets/imgs/campaign/hand-shake.png";
import BadgeIMG from "../../assets/imgs/campaign/badge.png";

function PreOrder() {
  // eslint-disable-next-line no-unused-vars
  const [reasons, setReasons] = useState([
    {
      icon: ThumsUpIMG,
      title: "Good for you",
      description: "Get our product at a cheaper price",
    },
    {
      icon: HandShakeIMG,
      title: "Good for us",
      description: "We can produce goods in a more responsible way ",
    },
    {
      icon: BadgeIMG,
      title: "Get our product at the best price",
      description: "We only produce what we need helping to...",
    },
  ]);

  return (
    <section className="section-container">
      <div className="mx-16">
        <PageHeader title="Pre-order at huge discounts" className="text-center" />
        <div className="grid grid-cols-2 gap-8 py-12">
          <div className="bg-gradient-radial from-white to-cyan-100 rounded-2xl p-12 h-full flex flex-col items-start">
            <div>
              <h4 className="red-header mb-4">How to sign up for the Kickstarter Launch?</h4>
              <p>
                We are planning to launch the Kickstarter
                campaign in March 2023 where we will be
                offering a huge discount off retail to all our early adopters.
                However, the ...Read more
              </p>
            </div>
            <CtaBtn text="Get huge discounts on launch day" className="bg-dark-blue text-white my-auto" />
          </div>
          <div className="bg-gradient-radial from-white to-blue-100 rounded-2xl p-12">
            <div className="mb-8">
              <h4 className="red-header mb-4">Why Kickstarter?</h4>
              <p>
                We believe that our crowdfunding model is the best way to cut the
                middlemen and distribution. This allows us to ...Read more
              </p>
            </div>
            <div className="flex gap-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex-1 text-center flex flex-col justify-between gap-4">
                  <CustomIMG src={reason.icon} alt="thums-up" className="w-16 mx-auto" />
                  <div className="text-center my-auto">
                    <h6 className="text-dark-blue">{reason.title}</h6>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreOrder;
