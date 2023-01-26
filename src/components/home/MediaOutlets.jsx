import React from "react";
import { getImg } from "../../helpers";
import { CustomIMG, PageHeader } from "../Micro";

// imgs

function MediaOutlets({ response }) {
  return (
    <section className="section-container lg:py-[60px] bg-white text-black border-b">
      <PageHeader title="Media Outlets" className="text-center max-md:mb-12" />
      <div className="container mx-auto flex justify-center items-center gap-12">
        {response?.MediaOutletItem?.map((patner) => (
          <div className="w-full h-48 overflow-hidden" key={patner.id}>
            <CustomIMG src={getImg(patner?.MediaOutlestImage)} ImgClassName="w-full object-contain aspect-[2/3] h-full" className="w-full h-full flex justify-center items-center" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MediaOutlets;
