import React from "react";
import { CustomIMG, PageHeader } from "../Micro";
import MediaKitIMG from "../../assets/imgs/meadia-kit.png";

function MeadiaKit() {
  return (
    <section className="section-wrapper section-container max-lg:mb-10">
      <div className="flex justify-center items-center flex-col lg:gap-8 gap-4 pt-12">
        <PageHeader data-aos="fade-in" data-aos-delay="300" title="Our Media Kit" />
        <CustomIMG data-aos="fade-in" data-aos-delay="300" src={MediaKitIMG} alt="skyted" className="" />
      </div>
    </section>
  );
}

export default MeadiaKit;
