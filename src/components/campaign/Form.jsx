import React from "react";
import { CtaBtn, Input } from "../Micro";

function Form(setMargins) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
  };
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
              data-aos="fade-in"
              className="text-lg md:text-2xl font-medium md:mb-4 text-black"
            >
              Get early bird discounts
              <p className="w-full md:max-w-[500px] text-base mt-4">
                We’re launching soon. Sign up today and be the first to
                get huge discounts on launch day.
              </p>
            </h2>
          </div>
          <div className="flex align self-center">
            <div>
              <div className="mc-field-group">

                <input
                  data-aos="fade-in"
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  className="px-5 py-3 border-none outline-none min-w-[28rem] required email flex-1 bg-white text-black rounded-2xl py-4 h-11 text-base mr-4"
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
              className=" bg-dark-blue text-white"
              style={{ margin: 0 }}
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;
