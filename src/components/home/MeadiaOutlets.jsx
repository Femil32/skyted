import React from "react";
import { getImg } from "../../helpers";
import { CustomIMG, PageHeader } from "../Micro";

// imgs

function MeadiaOutlets({ response }) {
  return (
    <section className="section-container lg:py-[60px] bg-white text-black border-b">
      <PageHeader title="Meadia Outlets" className="text-center max-md:mb-12" />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-12 gap-x-8 md:gap-8">
        {response?.MediaOutletItem?.map((patner) => (
          <div className="w-full h-48 overflow-hidden" key={patner.id}>
            <CustomIMG src={getImg(patner?.MediaOutlestImage)} ImgClassName="w-full object-contain" className="w-full h-full flex justify-center items-center" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeadiaOutlets;
