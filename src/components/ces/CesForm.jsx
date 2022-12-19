import React from "react";
import { CtaBtn, Input } from "../Micro";

function CesForm() {
  return (
    <div className="section-container pt-0">
      <form action="" className="p-8 rounded-3xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden">
        <h2 className="text-lg md:text-2xl font-medium md:mb-4 text-black">Sign up here to become our Influencer</h2>
        <div className="flex gap-8 flex-col md:flex-row">
          <Input className="flex-1" placeholder="Your full name" type="text" title="full_name" />
          <Input className="flex-1" placeholder="Your email address" type="text" title="email" />
          <Input className="flex-1" placeholder="Phone number" type="text" title="phone" />
        </div>
        <div className="mx-auto">
          <CtaBtn text="Sihn Up" className="inline-block mx-auto bg-[#1781B8] text-white" />
        </div>
      </form>
    </div>
  );
}

export default CesForm;
