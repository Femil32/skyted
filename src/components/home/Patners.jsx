import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    <section className="section-container lg:py-[60px] bg-white text-black border-b">
      <div className="grid grid-cols-12">
        <div className="col-span-4 flex items-center">
          <PageHeader title="Our Partners" />
        </div>
        <div className="col-span-7 col-start-6">
          <Swiper
            slidesPerView={3}
            centeredSlides
            loop="true"
            className="mySwiper"
          >
            {patners.map((patner, i) => (
              <SwiperSlide key={i} className="max-w-sm overflow-hidden h-24 flex justify-center items-center">
                <CustomIMG src={patner.imgUrl} className="w-44" ImgClassName=" mix-blend-color-burn object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Patners;
