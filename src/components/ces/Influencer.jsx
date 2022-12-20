import React from "react";
import { CustomIMG, PageHeader } from "../Micro";
import InfluencerImg from "../../assets/imgs/ces/influencer.png";

function Influencer() {
  return (
    <section className="section-container">
      <div>
        <PageHeader title="Join our Influencer Club" className="text-center mb-24" />
        <div>
          <CustomIMG src={InfluencerImg} alt="InfluencerImg" className="rounded-3xl" />
          <p className="mt-5 tracking-wider">
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
