/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from "react";
import { Controller, EffectFade } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomIMG } from "../Micro";
// imgs
import MaskIMG2 from "../../assets/imgs/mask-break.png";
import MaskIMG from "../../assets/imgs/product/mask.png";

function Hero() {
  const aa = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [productPoints, setProductPoints] = useState([
    {
      id: 0,
      title: "Mask Filter (Open air mask)",
      color: "#5E5AFF",
      image: MaskIMG,
    },
    {
      id: 1,
      title: "Bone Conductor Microphone",
      color: "#20DA54",
      image: MaskIMG2,
    },
    {
      id: 2,
      title: "Bone Conductor Microphone",
      color: "#FF5ABD",
      image: MaskIMG,
    },
    {
      id: 3,
      title: "-25 to -40dB Sound Silencer",
      color: "#FF9F5A",
      image: MaskIMG2,
    },
    {
      id: 4,
      title: "220g Weight",
      color: "#FF7373",
      image: MaskIMG,
    },
  ]);

  return (
    <section className="section-wrapper overflow-hidden bg-[url('src/assets/imgs/product/hero-bg.png')] bg-[url('src/assets/imgs/product/bg-gray  .png')] mt-[80px] bg-contain bg-[#e3e3ea] bg-no-repeat bg-center h-[calc(100vh-88px)] p-0">
      <div className="flex w-full ">
        <div className="w-1/2 h-full relative">
          <Swiper
            ref={aa}
            slidesPerView={1}
            centeredSlides
            loop="true"
            modules={[Controller, EffectFade]}
            controller={{ control: controlledSwiper }}
            className="mySwiper ml-40 mt-20"
          >
            {productPoints.map((patner, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center relative w-32">
                <CustomIMG src={patner.image} alt="mask" className="w-[40rem]" />
              </SwiperSlide>
            ))}

          </Swiper>
          <h2 className="absolute -bottom-52 text-3xl font-semibold left-1/2">Skyted Mask</h2>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <ul className="space-y-10 mt-28">
            {
              productPoints.map((point) => (
                <li
                  key={point.id}
                  className="flex gap-4 items-center cursor-pointer group"
                  onClick={() => {
                    setActiveSlide(point.id);
                    aa.current.swiper.slideTo(point.id);
                  }}
                >
                  <span className="bg-gray-300 flex justify-center items-center w-5 h-5 rounded-full m-0 p-0">
                    <span className={` ${point.id == activeSlide ? "w-full h-full" : "w-2 h-2"} block rounded-full group-hover:w-full group-hover:h-full transition-all`} style={{ backgroundColor: point.color }} />
                  </span>
                  <p>{point.title}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
