import React from "react";
import { CtaBtn, Input } from "../Micro";

function Form() {
  return (
    <section className="section-container py-0">
      <form action="" className="p-8 mx-16 rounded-3xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden">
        <h2 className="text-lg md:text-2xl font-medium md:mb-4 text-black">
          Sign up below to be the first to know about our Kickstarter
          {" "}
          <br />
          campaign and get huge discounts.
        </h2>
        <div className="flex gap-8 flex-col md:flex-row">
          <Input className="flex-1 bg-white rounded-2xl py-4" placeholder="Your full name" type="text" title="full_name" />
          <Input className="flex-1 bg-white rounded-2xl py-4" placeholder="Your email address" type="text" title="email" />
        </div>
        <div className="mx-auto">
          <CtaBtn text="Submit" className="inline-block mx-auto bg-dark-blue text-white" />
        </div>
      </form>
    </section>
  );
}

export default Form;