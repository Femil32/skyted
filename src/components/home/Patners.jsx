import React, { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomIMG, PageHeader } from "../Micro";

// imgs
import AirbusIMG from "../../assets/imgs/home/airbus.png";
import EsaIMG from "../../assets/imgs/home/esa.png";
import OneraIMG from "../../assets/imgs/home/onera.png";
// import CnetIMG from "../../assets/imgs/home/cnet.png";
// import DailyMailIMG from "../../assets/imgs/home/dailymail.png";
// import forbesIMG from "../../assets/imgs/home/forbes.png";
// import GadgetFlowIMG from "../../assets/imgs/home/gadget flow.png";
// import MirrorIMG from "../../assets/imgs/home/mirror.png";
// import ReutersIMG from "../../assets/imgs/home/reuters.png";
// import VentureBeatIMG from "../../assets/imgs/home/venture beat.png";
// import WsjIMG from "../../assets/imgs/home/WSJ.png";

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
    // {
    //   id: 3,
    //   imgUrl: CnetIMG,
    // },
    // {
    //   id: 4,
    //   imgUrl: DailyMailIMG,
    // },
    // {
    //   id: 5,
    //   imgUrl: forbesIMG,
    // },
    // {
    //   id: 6,
    //   imgUrl: GadgetFlowIMG,
    // },
    // {
    //   id: 7,
    //   imgUrl: MirrorIMG,
    // },
    // {
    //   id: 8,
    //   imgUrl: ReutersIMG,
    // },
    // {
    //   id: 9,
    //   imgUrl: VentureBeatIMG,
    // },
    // {
    //   id: 10,
    //   imgUrl: WsjIMG,
    // },
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
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {patners.map((patner, i) => (
              <SwiperSlide key={i} className="max-w-sm min-h-full overflow-hidden flex justify-center items-center" style={{ height: "auto" }}>
                <CustomIMG src={patner.imgUrl} className="w-44" ImgClassName=" mix-blend-color-burn object-contain max-w-[100%] max-h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Patners;
