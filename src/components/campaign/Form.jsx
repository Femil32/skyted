import React from "react";
import { parseHtml } from "../../helpers";
import { CtaBtn } from "../Micro";

function Form({ setMargins, response }) {
  return (
    <section className={`section-container py-0 ${setMargins ? "mt-8" : ""}`}>
      <form
        action="https://alumnair.us1.list-manage.com/subscribe/post?u=13691f994582aaf2190f0c8d2&amp;id=b807faeffb&amp;f_id=007233e2f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className="validate lg:p-8 p-6 rounded-3xl bg-[#bcc2c2] flex flex-col gap-8 overflow-hidden"
      >
        <div className=" flex-col md:flex-row grid grid-rows-1 grid-flow-col gap-4 w-full">
          <div className="flex flex-col items-start gap-4 ">
            <h2
              className="text-lg md:text-2xl font-medium md:mb-4 text-black"
            >
              {response?.ReserveSkyted_Title}
              <p className="w-full md:max-w-[500px] text-base mt-4">
                {parseHtml(response?.ReserveSkyted_Detail)}
              </p>
            </h2>
          </div>
          <div className="flex align self-center">
            <div>
              <div className="mc-field-group">
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  className="px-5 border-none outline-none min-w-[28rem] required email flex-1 bg-white text-black rounded-2xl py-4 h-11 text-base mr-4"
                  placeholder="Email"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
              </div>
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }} />
              <div className="response" id="mce-success-response" style={{ display: "none" }} />
            </div>
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_13691f994582aaf2190f0c8d2_b807faeffb" tabIndex="-1" value="" /></div>
            <CtaBtn
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              type="submit"
              text="Sign up today"
              className=" bg-dark-blue text-white rounded-2xl"
              style={{ margin: 0 }}
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
