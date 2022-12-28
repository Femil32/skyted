import React from "react";
import { CustomIMG, PageHeader } from "../Micro";
import InfluencerImg from "../../assets/imgs/ces/influencer.png";

function Influencer() {
  return (
    <section className="section-wrapper section-container">
      <div>
        <PageHeader data-aos="fade-in" title="Join our Influencer Club" className="text-center md:mb-24 mb-12" />
        <div>
          <CustomIMG data-aos="fade-in" src={InfluencerImg} alt="InfluencerImg" className="rounded-3xl" />
          <p data-aos="fade-in" className="mt-5 tracking-wider">
            Join our exclusive “Influencer Club” which will give you early access to
            our product launch information, a free product when it’s available and
            a chance to be an affiliate marketer for our upcoming Kickstarter Launch
            early next year.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Influencer;
