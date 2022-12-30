import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { PageHeader } from "../Micro";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// import ConsumerLogo from "@/assets/imgs/consumer-logo.jpg";
import ConsumerLogo from "@/assets/imgs/Group 2506.png";
import Kickstarter from "@/assets/imgs/kickstarter.png";

// import SwiperNavigation from "../common/SwiperNavigation";

const slideData = [
  {
    slideImg: ConsumerLogo,
    slideDescription: `Come and experience Skyted Masks at Eureka Park booth 61211-10.
    Book an appointment today.`,
    className: "flex justify-self-end mr-11",
    to: "/ces",
    slideDate: "05 Jan 2023",
    slideLocation: "Las Vegas",
  },
  {
    slideImg: Kickstarter,
    className: "w-full  min-h-[650px] mr-11",
    slideDescription: `Interested in making a pre-order? We will be launching our
    Kickstarter in to March 2023. Join us now to get huge discounts on
    launch day.`,
    to: "/campaign",
    slideDate: "March 2023",
    slideLocation: "USA",
  },
];

function Events() {
  // const swiper = useSwiper();

  return (
    <section className="md:py-[88px] py-10 px-6 w-full bg-white text-black">
      <div>
        <PageHeader
          data-aos="fade-in"
          className="text-center"
          title="Coming up next..."
        />
        <div className="grid grid-rows-1 grid-flow-col gap-1">
          {/* <div className="py-8 relative flex justify-center "> */}
          {/* <Swiper
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
          > */}
          {slideData.map((slide, i) => (
            <Link to={slide?.to} key={i} className={`${slide.className}`}>
              <div className="flex flex-col justify-center items-start gap-4">
                <div className="w-full justify-self-center">
                  <img src={slide.slideImg} alt="ConsumerLogo" />
                </div>
                <h6 className="w-full md:max-w-[600px]">
                  {slide.slideDescription}
                </h6>
                <div className="flex flex-col">
                  <span className="text-sm  text-[#001432]/50 font-medium">
                    {slide.slideDate}
                  </span>
                  <span className="text-sm text-[#001432]/50 font-medium">
                    {slide.slideLocation}
                  </span>
                </div>
              </div>
            </Link>
          ))}
          {/* <div className="flex justify-center items-center mt-12">
            <SwiperNavigation />
          </div> */}
          {/* </Swiper> */}
        </div>
      </div>
    </section>
  );
}

export default Events;
