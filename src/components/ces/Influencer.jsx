import React from "react";
import { getImg } from "../../helpers";
import { CustomIMG, PageHeader } from "../Micro";

function Influencer({ response }) {
  return (
    <section className="section-container">
      <div>
        <PageHeader title={response?.JoinourTitle} className="text-center md:mb-24 mb-12" />
        <div>
          <CustomIMG src={getImg(response?.JoinourImage)} alt="InfluencerImg" className="rounded-3xl" />
          <p className="mt-5 tracking-wider">
            {response?.JoinourDescription}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Influencer;
