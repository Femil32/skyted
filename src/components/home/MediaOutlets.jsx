import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getImg } from "../../helpers";
import { CustomIMG, PageHeader } from "../Micro";

// imgs

function MediaOutlets({ response }) {
  return (
    <section className="section-container lg:py-[60px] bg-white text-black border-b">
      <PageHeader title="Media Outlets" className="text-center max-md:mb-12" />
      <div className="container mx-auto justify-center items-stretch flex-row gap-12 max-md:flex-wrap hidden xl:flex">
        {response?.MediaOutletItem?.map((patner) => (
          <div className="md:w-full w-32 h-auto overflow-hidden" key={patner.id}>
            <CustomIMG src={getImg(patner?.MediaOutlestImage)} ImgClassName="w-full object-contain" className="w-full h-full flex justify-center items-center" />
          </div>
        ))}
      </div>
      <div className="xl:hidden">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            720: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          slidesPerView={3}
          centeredSlides
          loop="true"
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {response?.MediaOutletItem?.map((patner, i) => (
            <SwiperSlide key={i} className="max-w-sm min-h-full overflow-hidden flex justify-center items-center" style={{ height: "auto" }}>
              <CustomIMG src={getImg(patner?.MediaOutlestImage)} className="w-44" ImgClassName=" mix-blend-color-burn object-contain max-w-[100%] max-h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MediaOutlets;
