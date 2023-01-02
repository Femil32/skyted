import React, { useState } from "react";
import { CtaBtn, Input, PageHeader } from "../Micro";
// imgs
import InfluencerIMG from "../../assets/imgs/profileKit/influencer.png";
import ImgData from "../common/ImgData";

function Influencer() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

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
          <form
            action="https://alumnair.us1.list-manage.com/subscribe/post?u=13691f994582aaf2190f0c8d2&amp;id=b807faeffb&amp;f_id=007233e2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate p-8 rounded-2xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden mt-5"
            target="_blank"
          // onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <div className="mc-field-group">

                <input
                  data-aos="fade-in"
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  className="px-5 py-3 border-none outline-none w-full rounded-xl backdrop-blur-lg bg-white lg:placeholder:text-base placeholder:text-sm aos-init aos-animate"
                  placeholder="Email"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="FNAME"
                id="mce-FNAME"
                value={formdata.name}
                onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                data-aos="fade-in"
                data-aos-delay="500"
                placeholder="Name"
                title="name"
                className="px-5 py-3 w-full outline-none w-full rounded-xl backdrop-blur-lg bg-white lg:placeholder:text-base placeholder:text-sm"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_13691f994582aaf2190f0c8d2_b807faeffb"
                tabIndex="-1"
                value=""
              />
            </div>
            <CtaBtn
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              type="submit"
              text="Join Us"
              className=" bg-dark-blue text-white"
              style={{ margin: 0 }}
            />
          </form>
        </ImgData>
      </div>
    </section>
  );
}

export default Influencer;
