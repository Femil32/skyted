import React from "react";
import { CtaBtn, PageHeader } from "../Micro";
// imgs
import InfluencerIMG from "../../assets/imgs/profileKit/influencer.png";
import ImgData from "../common/ImgData";

function Influencer() {
  return (
    <section className="section-wrapper section-container">
      <div className="flex justify-center items-center flex-col lg:gap-8 lg:py-12">
        <div className="flex justify-center flex-col items-center mb-8">
          <PageHeader data-aos="fade-in" title="Join our Influencer Club" />
          <p data-aos="fade-in">
            We offer you the possibility to promote our product before
            teh kick strater community.
          </p>
        </div>
        <ImgData
          data-aos="fade-in"
          src={InfluencerIMG}
          alt="influencer"
          description="Join the Influencer club and get in touch wih us to promote
            how we could support Silent calls and silent games."
          dataClasses="max-md:order-2 max-md:text-center"
          imgClasses="max-md:order-1"
        >
          <CtaBtn text="Calendly Games" className="bg-dark-blue text-white mt-8" />
        </ImgData>
      </div>
    </section>
  );
}

export default Influencer;
