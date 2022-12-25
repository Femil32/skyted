import React, { useState } from "react";
import { Controller, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomIMG, PageHeader } from "../Micro";
import "swiper/css";

// imgs
import News1IMG from "../../assets/imgs/profileKit/news-1.png";
import News2IMG from "../../assets/imgs/profileKit/news-2.png";
import News3IMG from "../../assets/imgs/profileKit/news-3.png";
import News4IMG from "../../assets/imgs/profileKit/news-4.png";
import MaskNoire from "../../assets/imgs/masque-noire.png";

const Press = () => {
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
    <section className="section-container py-0">
      <PageHeader title="Press Release" className="text-center" />
      <div className="flex gap-12 h-[650px] py-12">
        <div className="w-4/5">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            modules={[Autoplay, Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            className="h-full"
            onSlideChange={(e) => setActiveSlide(e.activeIndex)}
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
      </div>
      <div className="flex items-center gap-4">
        <CustomIMG src={MaskNoire} alt="mask" className="w-16 p-3 px-4 bg-[#FFCCB7] rounded-2xl" />
        <p className="text-xl">Skyted is currently designing a new headset designed.</p>
      </div>
    </section>
  );
};

export default Press;
