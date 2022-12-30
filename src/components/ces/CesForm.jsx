import React from "react";
import { CtaBtn, Input } from "../Micro";

function CesForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
  };
  return (
    <div className="section-container md:pt-0 ">
      <form id="cesForm" onSubmit={(e) => handleSubmit(e)} className="p-8 rounded-3xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden mx-12 my-8">
        <h2 data-aos="fade-in" className="text-lg md:text-2xl font-medium md:mb-4 text-black">Sign up here to become our Influencer</h2>
        <div className="flex gap-8 flex-col md:flex-row">
          <Input data-aos="fade-in" className="flex-1 bg-white text-black rounded-2xl" placeholder="Your full name" type="text" title="fullName" required />
          <Input data-aos="fade-in" className="flex-1 bg-white text-black rounded-2xl" placeholder="Your email address" type="email" title="email" required />
          <Input
            data-aos="fade-in"
            className="flex-1 bg-white text-black rounded-2xl"
            pattern={/(7|8|9)\d{9}/}
            placeholder="Phone number"
            type="number"
            title="Must be 10 digit"
            required
          />
        </div>
        <div className="mx-auto">
          <CtaBtn data-aos="fade-in" type="submit" text="Sign Up" className="inline-block mx-auto bg-dark-blue text-white" />
        </div>
      </form>
    </div>
  );
}

export default CesForm;
