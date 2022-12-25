import React, { useState } from "react";
import { Controller } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import News1IMG from "../assets/imgs/profileKit/news-1.png";
import News2IMG from "../assets/imgs/profileKit/news-2.png";
import News3IMG from "../assets/imgs/profileKit/news-3.png";
import News4IMG from "../assets/imgs/profileKit/news-4.png";
import { CustomIMG } from "../components/Micro";

const Temp = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [swiperImgs, setSwiperImgs] = useState([
    News1IMG,
    News2IMG,
    News3IMG,
    News4IMG,
  ]);

  return (
    <main className="flex gap-4 px-6 h-[650px]">
      <div className="w-4/5">
        <Swiper
          spaceBetween={30}
          modules={[Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className="h-full"
        >
          {swiperImgs.map((img, i) => (
            <SwiperSlide key={i} className="bg-transparent rounded-3xl overflow-hidden">
              <CustomIMG src={img} alt="news" className="w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-1/5">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          direction="vertical"
          className="h-full"
        >
          {swiperImgs.map((img, j) => (
            <SwiperSlide
              className="bg-transparent "
              key={j}
              onClick={() => {
                firstSwiper.slideTo(j);
                setActiveSlide(j);
              }}
            >
              <CustomIMG src={img} alt="news" className={`${j === activeSlide ? "border-red-600" : "border-transparent"} border-2  w-full h-full rounded-3xl overflow-hidden`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Temp;
