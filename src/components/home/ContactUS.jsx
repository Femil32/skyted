import React from "react";
import {
  CtaBtn, Input, PageHeader, TextArea,
} from "../Micro";

function ContactUS() {
  return (
    <section className="section-container bg-white text-black">
      <PageHeader title="Contact us" className="text-center mb-12" />
      <form action="" className="p-8 rounded-2xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden">
        <h2 className="text-lg md:text-2xl text-[#001432]/80 font-medium md:mb-4" >Get in touch with us</h2>
        <div className="flex gap-8 flex-col md:flex-row" >
          <Input className="flex-1 bg-white rounded-2xl" placeholder="Your full name" type="text" title="full_name" />
          <Input className="flex-1 bg-white rounded-2xl" placeholder="Your email address" type="text" title="email" />
          <Input className="flex-1 bg-white rounded-2xl" placeholder="Website" type="text" title="website" />
        </div>
        <div >
          <TextArea placeholder="Write your comment here..." name="comment" className={'bg-white rounded-2xl'} rows={3} />
        </div>
        <div className="mx-auto">
          <CtaBtn text="Submit" className="inline-block mx-auto bg-dark-blue text-white" />
        </div>
      </form>
    </section>
  );
}

export default ContactUS;
