import React from "react";
import { CtaBtn, Input, PageHeader } from "../Micro";
// imgs
import InfluencerIMG from "../../assets/imgs/profileKit/influencer.png";
import ImgData from "../common/ImgData";

function Influencer() {
  return (
    <section className="section-container">
      <div className="flex justify-center items-center flex-col lg:gap-8 lg:py-12">
        <div className="flex justify-center flex-col items-center mb-8">
          <PageHeader data-aos="fade-in" title="Join our Influencer Club" />
          <p data-aos="fade-in">
            We offer you the possibility to promote our product before teh kick
            strater community.
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
          <div className="p-8 rounded-2xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden mt-5">
            <div>
              <Input
                data-aos="fade-in"
                data-aos-delay="500"
                type="email"
                placeholder="Email"
                title="email"
                className="w-full rounded-xl backdrop-blur-lg bg-white lg:placeholder:text-base placeholder:text-sm"
              />
            </div>
            <div>
              <Input
                data-aos="fade-in"
                data-aos-delay="500"
                type="text"
                placeholder="Name"
                title="name"
                className="w-full rounded-xl backdrop-blur-lg bg-white lg:placeholder:text-base placeholder:text-sm"
              />
            </div>

            <CtaBtn text="Join Us" className="bg-dark-blue text-white" />
          </div>
        </ImgData>
      </div>
    </section>
  );
}

export default Influencer;
