import React from "react";
import { MetaverseIcon, OfficeIcon, TravellersIcon } from "../AllSvgs";
import { IconCard, PageHeader } from "../Micro";

function Features() {
  return (
    <section className="section-wrapper  bg-white text-black">
      <div className="section-container">
        <PageHeader
          data-aos="fade-in"
          title={(
            <>
              <span className="block whitespace-nowrap mb-2">Get back your</span>
              <span className="whitespace-nowrap block">&quot;Freedom of Speech&quot;</span>
            </>
          )}
          className="max-w-lg text-center mx-auto"
        />
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-8 md:gap-20 py-6">
          <IconCard
            data-aos="fade-in"
            icon={<TravellersIcon width="42" />}
            title="Travellers"
            description={
              `Whether you are on the flight, in the car or
            waiting in the lounge area we have got you...`
            }
            link="/services"
            linkText="Learn more"
            btnClassName="bg-dark-blue text-white"
          />
          <IconCard
            data-aos="fade-in"
            icon={<OfficeIcon width="42" />}
            title="Office & Call Center"
            description={
              `Hybrid work has create lots of stress has we
            were used to work silently for months during...`
            }
            link="/services"
            linkText="Learn more"
            btnClassName="bg-dark-blue text-white"
          />
          <IconCard
            data-aos="fade-in"
            icon={<MetaverseIcon width="42" />}
            title="Metaverse & Gamers"
            description={
              `Are you tired to wake up the whole family
            when you play night games?`
            }
            link="/services"
            linkText="Learn more"
            btnClassName="bg-dark-blue text-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
