import React from "react";
import {
  CtaBtn, Input, PageHeader, TextArea,
} from "../Micro";

function ContactUS() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);
  };
  return (
    <section className="section-container bg-white text-black">
      <PageHeader data-aos="fade-in" title="Contact us" className="text-center mb-12" />
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)} className="p-8 rounded-2xl bg-[#F7FAFB] flex flex-col gap-8 overflow-hidden">
        <h2 data-aos="fade-in" className="text-lg md:text-2xl text-[#001432]/80 font-medium md:mb-4">Get in touch with us</h2>
        <div className="flex gap-8 flex-col md:flex-row">
          <Input data-aos="fade-in" className="flex-1 bg-white text-black rounded-2xl" placeholder="Your full name" type="text" title="full_name" required />
          <Input data-aos="fade-in" className="flex-1 bg-white text-black rounded-2xl" placeholder="Your email address" type="email" title="email" required />
          <Input
            data-aos="fade-in"
            className="flex-1 bg-white text-black rounded-2xl"
            pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
            placeholder="Mobile Number"
            type="text"
            title="Must be Url"
            required
          />
        </div>
        <div>
          <TextArea data-aos="fade-in" placeholder="Write your comment here..." name="comment" className="bg-white text-black rounded-2xl" rows={3} />
        </div>
        <div className="mx-auto">
          <CtaBtn data-aos="fade-in" text="Submit" type="submit" className="inline-block mx-auto bg-dark-blue text-white" />
        </div>
      </form>
    </section>
  );
}

export default ContactUS;
