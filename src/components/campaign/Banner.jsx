import React from "react";
import CampaignIMG from "../../assets/imgs/campaign/campaign.png";
import { CustomIMG } from "../Micro";

function Banner() {
  return (
    <section className="section-container">
      <div className="px-16 py-10">
        <CustomIMG src={CampaignIMG} alt="campaign" className="rounded-4xl overflow-hidden w-full h-full" />
        <h4 className="text-2xl mt-8">
          We will launch a Kick starter campaign in March 2023 and we will
          keep you on the loop for more information, data, test results on
          this page.
        </h4>
      </div>
    </section>
  );
}

export default Banner;
