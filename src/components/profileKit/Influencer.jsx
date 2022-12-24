import React from "react";
import { CtaBtn, PageHeader } from "../Micro";
// imgs
import InfluencerIMG from "../../assets/imgs/profileKit/influencer.png";
import ImgData from "../common/ImgData";

function Influencer() {
  return (
    <section className="section-container">
      <div className="flex justify-center items-center flex-col gap-8 py-12">
        <div className="flex justify-center flex-col items-center mb-8">
          <PageHeader title="Join our Influencer Club" />
          <p>
            We offer you the possibility to promote our product before
            teh kick strater community.
          </p>
        </div>
        <ImgData
          src={InfluencerIMG}
          alt="influencer"
          description="Join the Influencer club and get in touch wih us to promote
            how we could support Silent calls and silent games."
        >
          <CtaBtn text="Calendly Games" className="bg-dark-blue text-white mt-8" />
        </ImgData>
      </div>
    </section>
  );
}

export default Influencer;
