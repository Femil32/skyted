import React from "react";
import { CustomIMG } from "../components/Micro";
// img
import BlogIMG from "../assets/imgs/news/plan-girl.png";

function SingleBlog() {
  return (
    <section className="section-container text-black bg-white">
      <div className="container mx-auto">
        <main className="mt-24">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-10">
              <span className="inline-block mb-4 text-gray-500" data-aos="fade-in" data-aos-delay="500">Published January 13,2023 </span>
              <h2 className="lg:text-6xl md:text-4xl text-2xl font-medium" data-aos="fade-in" data-aos-delay="500">Gamer Line – Silent Mask Headset</h2>
            </div>
            <CustomIMG data-aos="fade-in" data-aos-delay="500" src={BlogIMG} alt="BlogIMG" className="rounded-3xl overflow-hidden w-full max-h-[750px]" ImgClassName="max-h-[750px] w-full" />
            <div className="flex flex-col gap-4 mt-8 xl:px-32 md:text-lg" data-aos="fade-in" data-aos-delay="500">
              <p className="text-gray-500">Skyted is currently designing a new headset designed to support passenger in their next travel. Combiget in touch wih us to promote how we could support Silent calls and silent games.</p>
              <p className="text-gray-500">Post Covid, 2 billion hybrid workers need to handle Pre Covid travel habits and 6 to 10 calls a day. This implies a huge amount of stress for 56% of the workers who have been offered a remote job and must adapt to calls & video calls in “on the go” situations.</p>
              <p className="text-gray-500">There is no existing device to handle calls everywhere at any time, without needing to be in a closed space, an office, or a room with walls until Skyted Speech privacy solutions.</p>
              <p className="text-gray-500">There is currently no solution to stop your own voice and voice can spread on sound impact up to 30 feet during a phone call in the office. It reduces Office real estate request for close office or call cabin by limiting every staff’s voiceprint in the office with a 1/20 ratio.</p>
              <p className="text-gray-500">Skyted is currently designing a new headset designed to support passenger in their next travel. Combiget in touch wih us to promote how we could support Silent calls and silent games. Post Covid, 2 billion hybrid workers need to handle Pre Covid travel habits and 6 to 10 calls a day. This implies a huge amount of stress for 56% of the workers who have been offered a remote job and must adapt to calls & video calls in “on the go” situations. There is no existing device to handle calls everywhere at any time, without needing to be in a closed space, an office, or a room with walls until Skyted Speech privacy solutions. There is currently no solution to stop your own voice and voice can spread on sound impact up to 30 feet during a phone call in the office. It reduces Office real estate request for close office or call cabin by limiting every staff’s voiceprint in the office with a 1/20 ratio.</p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default SingleBlog;
