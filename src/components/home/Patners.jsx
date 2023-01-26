import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomIMG, PageHeader } from "../Micro";

// imgs
// import AirbusIMG from "../../assets/imgs/home/airbus.png";
// import EsaIMG from "../../assets/imgs/home/esa.png";
// import OneraIMG from "../../assets/imgs/home/onera.png";
import { getImg } from "../../helpers";
// import CnetIMG from "../../assets/imgs/home/cnet.png";
// import DailyMailIMG from "../../assets/imgs/home/dailymail.png";
// import forbesIMG from "../../assets/imgs/home/forbes.png";
// import GadgetFlowIMG from "../../assets/imgs/home/gadget flow.png";
// import MirrorIMG from "../../assets/imgs/home/mirror.png";
// import ReutersIMG from "../../assets/imgs/home/reuters.png";
// import VentureBeatIMG from "../../assets/imgs/home/venture beat.png";
// import WsjIMG from "../../assets/imgs/home/WSJ.png";

function Patners({ response }) {
  return (
    <section className="section-container lg:py-[60px] bg-white text-black border-b">
      <div className="grid grid-cols-12 max-md:grid-rows-2">
        <div className="col-span-12 md:col-span-4 flex items-center">
          <PageHeader title="Our Partners" />
        </div>
        <div className="md:col-span-7 col-span-12 md:col-start-6">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              720: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            slidesPerView={2}
            centeredSlides
            loop="true"
            className="mySwiper"
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {response?.OurpartnerImg?.map((patner, i) => (
              <SwiperSlide key={i} className="max-w-sm min-h-full overflow-hidden flex justify-center items-center" style={{ height: "auto" }}>
                <CustomIMG src={getImg(patner.Ourpartners_Image)} className="w-44" ImgClassName=" mix-blend-color-burn object-contain max-w-[100%] max-h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Patners;
