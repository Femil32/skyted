import React from "react";
import { getImg } from "../../helpers";
// import { MetaverseIcon, OfficeIcon, TravellersIcon } from "../AllSvgs";
import { IconCard, PageHeader } from "../Micro";

function Features({ response }) {
  return (
    <section className="section-container bg-white text-black">
      <PageHeader
        title={
          (
            <span className="block mb-2">{response?.GetBackYour_Title}</span>
          )
        }
        className="max-w-lg text-center mx-auto"
      />
      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-8 md:gap-18 py-6">
        {response?.GetBackList?.map((partner) => (
          <IconCard
            key={partner?.id}
            icon={getImg(partner?.GetbackyourList_image)}
            title={partner?.Getbackyourlist_Title}
            description={partner?.GetbackyourList_description}
            link="/services"
            linkText="Learn more"
            btnClassName="bg-dark-blue text-white"
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
