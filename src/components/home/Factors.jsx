/* eslint-disable max-len */
import React from "react";
import MaskMan from "@/assets/imgs/mask-break.png";
import { parseHtml } from "../../helpers";

// const points = [
//   {
//     point: "80% of the voice vibration is absorbed",
//   },
//   {
//     point: "External noise will not be picked by the internal microphone.",
//   },
//   {
//     point:
//       "●Compared to a COVID mask: the airflow can move without constraints in and out of the mask as it does from a jet engine.",
//   },
//   {
//     point: "By using cutting edge aerospace & acoustic technology, Skyted is able to reduce mask size by 1/10th of competitor mask size.",
//   },
//   {
//     point: "Product is manufactured with bio sourced or recycled materials.",
//   },
//   {
//     point:
//       "Product is earbud agnostic and can pair with any phone or video conferencing such Zoom through a Bluetooth connection.",
//   },
// ];

function Factors({ response }) {
  return (
    <section className="blur-bg section-container">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-3/5 order-2 md:order-1">
          <div className="mb-3 max-w-xl">
            <h6 className="text-xl font-medium text-dark-blue">
              {response?.DiscoverKey_title}
            </h6>
            <p className="py-4 text-base md:text-lg text-white  tracking-wide">
              {response?.DiscoverKey_description}
            </p>
          </div>
          <div>
            <h6 className="text-xl font-medium text-dark-blue">
              This gives the product exclusive advantages:
            </h6>
            <ul className="space-y-2 list-disc p-4 text-white text-base md:text-lg font-light tracking-wide">
              {response?.DiscoverKey_Advantages?.map((point, i) => (
                <li key={i}>{parseHtml(point.advantages)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-2/5 order-1 md:order-2">
          <div className="mx-auto mb-8 md:mb-0 scale-110">
            <img src={MaskMan} alt="product" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Factors;
