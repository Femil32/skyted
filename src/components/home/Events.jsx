import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PageHeader } from "../Micro";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import ConsumerLogo from "@/assets/imgs/consumer-logo.png";
import Kickstarter from "@/assets/imgs/kickstarter.png";
import SwiperNavigation from "../common/SwiperNavigation";

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
  // const swiper = useSwiper();

  return (
    <section className="md:py-[88px] py-10 px-6 w-full bg-white text-black">
      <div>
        <PageHeader data-aos="fade-in" className="text-center" title="Coming up next..." />
        <div className="py-8 relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides
            loop="true"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {slideData.map((slide, i) => (
              <SwiperSlide key={i} className="w-full md:max-w-[590px] min-h-[590px]">
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="w-full">
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
            <div className="flex justify-center items-center mt-12">
              <SwiperNavigation />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Events;
