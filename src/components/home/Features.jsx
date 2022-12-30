import React from "react";
import { MetaverseIcon, OfficeIcon, TravellersIcon } from "../AllSvgs";
import { IconCard, PageHeader } from "../Micro";

function Features() {
  return (
    <section className="section-container bg-white text-black">
      <PageHeader
        data-aos="fade-in"
        title={
           (
          <>
            <span className="block whitespace-nowrap mb-2">Get back your</span>
            <span className="whitespace-nowrap block">
              &quot;Freedom of Speech&quot;
            </span>
          </>
        )
}
        className="max-w-lg text-center mx-auto"
      />
      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-8 md:gap-20 py-6">
        <IconCard
          data-aos="fade-in"
          icon={<TravellersIcon width="42" />}
          title="Travelers"
          description="Whether you are on the flight, in the car or waiting in the lounge area, we’ve got you covered …"
          link="/services"
          linkText="Learn more"
          btnClassName="bg-dark-blue text-white"
        />
        <IconCard
          data-aos="fade-in"
          icon={<OfficeIcon width="42" />}
          title="Office & Call Center"
          description={`Hybrid workspaces have contributed to severe levels of stress and anxiety for employees who were
          previously accustomed to working within “silent environments.”`}
          link="/services"
          linkText="Learn more"
          btnClassName="bg-dark-blue text-white"
        />
        <IconCard
          data-aos="fade-in"
          icon={<MetaverseIcon width="42" />}
          title="Metaverse & Gamers"
          description={`Looking for the solution to waking the entire family while enthusiastically playing games late into the
          night?`}
          link="/services"
          linkText="Learn more"
          btnClassName="bg-dark-blue text-white"
        />
      </div>
    </section>
  );
}

export default Features;
