import React from "react";
import "swiper/css";
import { CtaBtn, CustomIMG, PageHeader } from "../Micro";

// imgs
// import News1IMG from "../../assets/imgs/profileKit/news1.png";
// import News2IMG from "../../assets/imgs/profileKit/news2.png";
// import News3IMG from "../../assets/imgs/profileKit/news3.png";
// import News4IMG from "../../assets/imgs/profileKit/news4.png";
// import News5IMG from "../../assets/imgs/profileKit/news5.png";
import { getImg } from "../../helpers";

const Press = ({ response }) => (
  <section className="section-container py-0 mb-10">
    <div className="flex flex-col justify-center items-center mb-16 pt-24">
      <PageHeader
        title={response?.HeroTitle}
        className="text-center"
      />
      <p className="mb-1">
        {response?.HeroDescription}
      </p>
      <a
        href={response?.Downloadlink}
        target="_blank"
        rel="noreferrer"
      >
        <CtaBtn
          text="Download"
          down
          className="mx-auto inline-block bg-twitter text-white"
        />
      </a>
    </div>
    <div className="flex gap-8">
      <div className="w-1/2 grid grid-cols-2 gap-12">
        {response?.MediaNewsList?.map((press) => (
          <a href={press.link} target="_blank" className="w-full h-full group" key={press.id} rel="noreferrer">
            <div>
              <CustomIMG
                src={getImg(press.MediaImage)}
                className="overflow-hidden rounded-xl mb-4 shadow-2xl"
              />
            </div>
            <p className="text-lg font-medium group-hover:text-blue-500 transition-all">{press?.MediaDescription}</p>
          </a>
        ))}
      </div>
      <div className="w-1/2">
        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
          <CustomIMG src={getImg(response?.MediaBigNews?.MediaImage)} className="w-full h-full mb-4" />
          <div className="absolute w-full left-0 bottom-0">
            <div className="relative z-10 text-white font-semibold press-layer h-36 flex items-end px-8 pb-4">
              <p className="text-lg max-w-lg">
                {response?.MediaBigNews?.MediaDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Press;
