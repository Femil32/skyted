import React from "react";
import {
  CtaBtn, Input, PageHeader, TextArea,
} from "../Micro";

function ContactUS() {
  return (
    <section className="section-container bg-white text-black">
      <PageHeader title="Contact us" className="text-center mb-12" />
      <form action="" className="p-8 rounded-2xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden">
        <h2 className="text-lg md:text-xl font-medium md:mb-4" data-aos="fade-in">Get in touch with us</h2>
        <div className="flex gap-8 flex-col md:flex-row" data-aos="fade-in">
          <Input className="flex-1" placeholder="Your full name" type="text" title="full_name" />
          <Input className="flex-1" placeholder="Your email address" type="text" title="email" />
          <Input className="flex-1" placeholder="Website" type="text" title="website" />
        </div>
        <div data-aos="fade-in">
          <TextArea placeholder="Write your comment here..." name="comment" rows={3} />
        </div>
        <div data-aos="fade-in" className="mx-auto">
          <CtaBtn text="Submit" className="inline-block mx-auto bg-[#1781B8] text-white" />
        </div>
      </form>
    </section>
  );
}

export default ContactUS;
