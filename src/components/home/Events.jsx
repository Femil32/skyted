import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { PageHeader } from "../Micro";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// import ConsumerLogo from "@/assets/imgs/consumer-logo.jpg";
import { getImg } from "../../helpers";

// import SwiperNavigation from "../common/SwiperNavigation";

// const slideData = [
//   {
//     slideImg: ConsumerLogo,
//     slideDescription: `Come and experience Skyted Masks at Eureka Park booth 61211-10.
//     Book an appointment today.`,
//     className: "flex justify-self-end mr-11",
//     to: "/ces",
//     slideDate: "05 Jan 2023",
//     slideLocation: "Las Vegas",
//   },
//   {
//     slideImg: Kickstarter,
//     className: "w-full  min-h-[650px] mr-11",
//     slideDescription: `Interested in making a pre-order? We will be launching our
//     Kickstarter in to March 2023. Join us now to get huge discounts on
//     launch day.`,
//     to: "/campaign",
//     slideDate: "March 2023",
//     slideLocation: "USA",
//   },
// ];

function Events({ response }) {
  // const swiper = useSwiper();

  return (
    <section className="md:py-[88px] py-10 px-6 w-full bg-white text-black">
      <div>
        <PageHeader
          className="text-center"
          title={response?.ComingUp_Title}
        />
        <div className="flex max-xl:flex-col justify-center items-center gap-20 mt-12">
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
          {response?.ComingUp_Events?.map((slide, i) => (
            <Link to={slide?.to} key={i} className={`${slide.className}`}>
              <div className="flex flex-col justify-center items-start gap-4">
                <div className="w-full justify-self-center">
                  <img src={getImg(slide?.ComingUp_Event_Image)} alt="ConsumerLogo" />
                </div>
                <h6 className="w-full md:max-w-[600px]">
                  {slide?.ComingUp_Event_Title}
                </h6>
                <div className="flex flex-col">
                  <span className="text-sm  text-[#001432]/50 font-medium">
                    {slide?.ComingUp_Event_Date}
                  </span>
                  <span className="text-sm text-[#001432]/50 font-medium">
                    {slide?.ComingUp_Event_City_Name}
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
