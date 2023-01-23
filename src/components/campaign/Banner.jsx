import React from "react";
import CampaignIMG from "../../assets/imgs/campaign/campaign.png";
import { CustomIMG } from "../Micro";

function Banner() {
  return (
    <section className="section-container">
      <div className="lg:px-16 lg:py-10 pt-12">
        <CustomIMG src={CampaignIMG} alt="campaign" className="lg:rounded-4xl rounded-2xl overflow-hidden w-full h-full" />
        <h4 className="text-lg lg:text-2xl mt-8">
          We will launch a Kickstarter campaign in March 2023 and we will
          keep you on the loop for more information, data, test results on
          this page.
        </h4>
      </div>
    </section>
  );
}

export default Banner;
