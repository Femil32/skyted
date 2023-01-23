import React from "react";
import {
  CtaBtn, Input, PageHeader, TextArea,
} from "../Micro";

function ContactUS({ response }) {
  return (
    <section className="section-container bg-white text-black">
      <PageHeader title="Contact us" className="text-center mb-12" />
      <form
        autoComplete="off"
        action="https://alumnair.us1.list-manage.com/subscribe/post?u=13691f994582aaf2190f0c8d2&amp;id=b807faeffb&amp;f_id=007233e2f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className="validate p-8 rounded-2xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden"
      >
        <h2 className="text-lg md:text-2xl text-[#001432]/80 font-medium md:mb-4">Get in touch with us</h2>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="mc-field-group flex-1">
            {/* <input type="text" name="FNAME" className="" id="mce-FNAME" /> */}
            <input

              name="FNAME"
              id="mce-FNAME"
              className="px-5 py-3 border-none outline-none w-full bg-white text-black rounded-2xl"
              placeholder="Your full name"
              type="text"
              title="full_name"
              required
            />
            <span id="mce-FNAME-HELPERTEXT" className="helper_text" />
          </div>
          <div className="mc-field-group size1of2 flex-1">
            <input
              type="number"
              name="MMERGE3"
              id="mce-MMERGE3"

              className="px-5 py-3 border-none outline-none w-full required email bg-white text-black rounded-2xl"
              pattern={/(7|8|9)\d{9}/}
              placeholder="Mobile Number"
              title="Must be 10 digit"
              required
            />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
          </div>
          <div className="mc-field-group flex-1">
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required

              className="px-5 py-3 border-none outline-none required email w-full bg-white text-black rounded-2xl"
              placeholder="Your email address"
              title="email"
            />
            {/* <input type="text" name="MMERGE3" className="" id="mce-MMERGE3" /> */}
            <span id="mce-MMERGE3-HELPERTEXT" className="helper_text" />
          </div>

        </div>
        <div className="mc-field-group">
          <textarea
            type="text"
            name="MMERGE2"
            id="mce-MMERGE2"

            placeholder="Write your comment here..."
            className="px-5 py-3 w-full outline-none bg-white text-black rounded-2xl"
            rows={3}
          />
          <span id="mce-MMERGE2-HELPERTEXT" className="helper_text" />
        </div>
        <div className="mx-auto">
          <div hidden="true"><input type="hidden" name="tags" value="5620685" /></div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: "none" }} />
            <div className="response" id="mce-success-response" style={{ display: "none" }} />
          </div>
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_13691f994582aaf2190f0c8d2_b807faeffb" tabIndex="-1" /></div>

          <CtaBtn type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" text="Submit" className="inline-block mx-auto bg-dark-blue text-white" />
        </div>
      </form>
    </section>
  );
}

export default ContactUS;
