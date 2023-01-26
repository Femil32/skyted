import React from "react";
import { getImg } from "../../helpers";
import { CustomIMG, PageHeader } from "../Micro";

// imgs

function MediaOutlets({ response }) {
  return (
    <section className="section-container lg:py-[60px] bg-white text-black border-b">
      <PageHeader title="Media Outlets" className="text-center max-md:mb-12" />
      <div className="container mx-auto flex justify-center items-stretch flex-row gap-12 max-md:flex-wrap">
        {response?.MediaOutletItem?.map((patner) => (
          <div className="md:w-full w-32 h-auto overflow-hidden" key={patner.id}>
            <CustomIMG src={getImg(patner?.MediaOutlestImage)} ImgClassName="w-full object-contain" className="w-full h-full flex justify-center items-center" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MediaOutlets;
