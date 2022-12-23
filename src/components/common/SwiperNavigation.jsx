import React from "react";
import { useSwiper } from "swiper/react";
import { LeftArrowIcon } from "../AllSvgs";

function SwiperNavigation() {
  const swiper = useSwiper();
  return (
    <div className="inline-block space-x-4">
      <button type="button" onClick={() => swiper.slidePrev()} className="cursor-pointer z-50 bg-gray-300/70 text-black w-10 h-10 rounded-full">
        <LeftArrowIcon width={20} />
      </button>
      <button type="button" onClick={() => swiper.slideNext()} className="cursor-pointer z-50 bg-gray-300/70 text-black w-10 h-10 rounded-full">
        <LeftArrowIcon width={20} className="rotate-180" />
      </button>
    </div>
  );
}

export default SwiperNavigation;
