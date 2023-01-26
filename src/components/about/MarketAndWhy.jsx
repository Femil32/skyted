import React from "react";
import ImgData from "../common/ImgData";
// imgs
import { getImg } from "../../helpers";

function MarketAndWhy({ response }) {
  return (
    <section className="section-container pt-0">
      <div className="xl:space-y-32 md:space-y-20 space-y-8">
        {response?.map((card, i) => (
          <ImgData
            imgClasses="max-md:order-1"
            dataClasses={i % 2 === 0 ? "max-md:order-2" : " order-2 md:pl-6"}
            title={card?.Title}
            description={card?.Description}
            src={getImg(card?.Image)}
            alt="MaskManIMG"
          />
        ))}
      </div>
    </section>
  );
}

export default MarketAndWhy;
