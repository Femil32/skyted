import React, { useState } from "react";
import { Controller, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CtaBtn, CustomIMG, PageHeader } from "../Micro";
import "swiper/css";

// imgs
import News1IMG from "../../assets/imgs/profileKit/news1.png";
import News2IMG from "../../assets/imgs/profileKit/news2.png";
import News3IMG from "../../assets/imgs/profileKit/news3.png";
import News4IMG from "../../assets/imgs/profileKit/news4.png";
import News5IMG from "../../assets/imgs/profileKit/news5.png";
import MaskNoire from "../../assets/imgs/bluemask.png";

const Press = () => {
  // store swiper instances
  const [activePress, setActivePress] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [allPress, setAllPress] = useState([
    {
      id: 0,
      imgUrl: News2IMG,
      description: "Skyted is currently designing a new headset designed.",
    },
    {
      id: 1,
      imgUrl: News3IMG,
      description: "Skyted invente un casque pour passer des appels en public sans.",
    },
    {
      id: 2,
      imgUrl: News4IMG,
      description: "Skyted is currently designing a new headset designed.",
    },
    {
      id: 3,
      imgUrl: News5IMG,
      description: "Skyted invente un casque pour passer des appels en public sans.",
    },
  ]);

  return (
    <section className="section-container py-0 mb-10">
      <div className="flex flex-col justify-center items-center mb-16">
        <PageHeader data-aos="fade-in" data-aos-delay="300" title="Press Release" className="text-center" />
        <a href="https://drive.google.com/file/d/1ve3d4awVstp8AgUhJSwM0p7-MzT30dXJ/view" target="_blank" rel="noreferrer">
          <CtaBtn text="Learn more" className="mx-auto inline-block bg-twitter text-white" />
        </a>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2 grid grid-cols-2 gap-12">
          {allPress.map((press) => (
            <div className="w-full h-full" key={press.id}>
              <div>
                <CustomIMG src={press.imgUrl} className="overflow-hidden rounded-xl mb-4 shadow-2xl" />
              </div>
              <p className="text-lg font-medium">{press.description}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
            <CustomIMG src={News1IMG} className="w-full h-full mb-4" />
            <div className="absolute w-full left-0 bottom-0">
              <div className="relative z-10 text-white font-semibold press-layer h-36 flex items-end px-8 pb-4">
                <p className="text-lg max-w-lg">
                  Skyted invente un casque pour passer des
                  appels en public sans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;