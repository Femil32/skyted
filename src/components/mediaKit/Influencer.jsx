import React from "react";
import { CtaBtn, PageHeader } from "../Micro";
// imgs
import { getImg } from "../../helpers";
import ImgData from "../common/ImgData";

function Influencer({ response }) {
  return (
    <section className="section-container">
      <div className="flex justify-center items-center flex-col lg:gap-8 lg:py-12">
        <div className="flex justify-center flex-col items-center mb-8">
          <PageHeader title={response?.JoinOurInfluencerTitle} />
          <p>
            {response?.JoinOurInfluencerSubtitle}
          </p>
        </div>
        <ImgData
          src={getImg(response?.JoinOurInfluencerImage)}
          alt="influencer"
          description={response?.JoinOurInfluencerDescription}
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
                placeholder="Name"
                title="name"
                className="px-5 py-3 w-full outline-none  rounded-xl backdrop-blur-lg bg-white lg:placeholder:text-base placeholder:text-sm"
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
