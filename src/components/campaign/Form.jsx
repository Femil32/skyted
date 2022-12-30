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
        onSubmit={(e) => handleSubmit(e)}
        action=""
        className="lg:p-8 p-6 rounded-3xl bg-[#bcc2c2] flex flex-col gap-8 overflow-hidden"
      >
        <div className=" flex-col md:flex-row grid grid-rows-1 grid-flow-col gap-4 w-full">
          <div className="flex flex-col items-start gap-4 ">
            <h2
              data-aos="fade-in"
              className="text-lg md:text-2xl font-medium md:mb-4 text-black"
            >
              Get huge discounts on Kickstarter
              <p className="w-full md:max-w-[600px] text-base mt-4">
                We’re launching soon. Sign up today and be the first to
                get huge discounts on launch day.
              </p>
            </h2>
          </div>
          <form action="" className="flex align self-center">
            <Input
              data-aos="fade-in"
              className="flex-1 bg-white text-black rounded-2xl py-4 h-11 text-base mr-4"
              placeholder="Your email address"
              type="email"
              title="email"
              required
              email
            />
            <div className="mx-0">
              <CtaBtn
                type="submit"
                data-aos="fade-in"
                text="Sign up today"
                className="inline-block rounded-2xl h-full  bg-dark-blue text-white"
              />
            </div>
          </form>
        </div>
      </form>
    </section>
  );
}

export default Form;
