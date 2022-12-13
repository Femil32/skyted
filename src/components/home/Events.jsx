import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { PageHeader } from "../Micro";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ConsumerLogo from "@/assets/imgs/consumer-logo.png";
import Kickstarter from "@/assets/imgs/kickstarter.png";

const slideData = [
  {
    slideImg: ConsumerLogo,
    slideDescription: `Come and experience Skyted Masks at Eureka Park booth 61211-10.
    Book an appointment today.`,
    slideDate: "05 Jan 2022",
    slideLocation: "Las Vegas",
  },
  {
    slideImg: Kickstarter,
    slideDescription: `Interested in making a pre-order? We will be launching our
    Kickstarter in to March 2023. Join us now to get huge discounts on
    launch day.`,
    slideDate: "March 2023",
    slideLocation: "India",
  },
  {
    slideImg: Kickstarter,
    slideDescription: `Come and experience Skyted Masks at Eureka Park booth 61211-10.
    Book an appointment today.`,
    slideDate: "05 Jan 2022",
    slideLocation: "Las Vegas",
  },
  {
    slideImg: ConsumerLogo,
    slideDescription: `lorem data Skyted Masks at Eureka Park booth 61211-10.
    Book an in to March 2023. Join us now to get huge discounts on
    launch day.`,
    slideDate: "Feb 2023",
    slideLocation: "India",
  },
];

function Events() {
  return (
    <section className="py-[88px] w-full bg-white text-black">
      <div>
        <PageHeader className="text-center" title="Coming up next..." />
        <div className="py-6">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop="true"
            centeredSlides="true"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {slideData.map((slide) => (
              <SwiperSlide className="max-w-md">
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="w-96">
                    <img src={slide.slideImg} alt="ConsumerLogo" />
                  </div>
                  <h6>{slide.slideDescription}</h6>
                  <div className="flex flex-col">
                    <span className="text-sm text-[#001432]/50 font-medium">{slide.slideDate}</span>
                    <span className="text-sm text-[#001432]/50 font-medium">{slide.slideLocation}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Events;
