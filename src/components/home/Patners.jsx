import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { CustomIMG, PageHeader } from "../Micro";

// imgs
import AirbusIMG from "../../assets/imgs/home/airbus.png";
import EsaIMG from "../../assets/imgs/home/esa.png";
import OneraIMG from "../../assets/imgs/home/onera.png";

function Patners() {
  const [patners, setPatners] = useState([
    {
      id: 0,
      imgUrl: AirbusIMG,
    },
    {
      id: 1,
      imgUrl: EsaIMG,
    },
    {
      id: 2,
      imgUrl: OneraIMG,
    },
  ]);
  return (
    <section className="section-wrapper lg:py-[60px] bg-white text-black border-b">
      <div className="md:grid flex flex-col grid-cols-12 section-container">
        <div className="col-span-4 flex items-center max-md:justify-center">
          <PageHeader title="Our Partners" />
        </div>
        <div className="col-span-7 col-start-6">
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            centeredSlides
            loop="true"
            className="mySwiper"
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              728: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {patners.map((patner, i) => (
              <SwiperSlide key={i} className="max-w-sm overflow-hidden h-24 flex justify-center items-center">
                <CustomIMG src={patner.imgUrl} alt="patner" className="w-44" ImgClassName=" mix-blend-color-burn object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Patners;
