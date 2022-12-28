import React from "react";
import MaskMan from "@/assets/imgs/mask-break.png";

const points = [
  {
    point: "80% of the voice vibration is absorbed.",
  },
  {
    point: "External noise will not be picked by the internal microphone.",
  },
  {
    point: "Compared to Covid mask: the airflow can move without constraints in and out of the mask as it does from a jet Engine.",
  },
  {
    point: "By using cutting edge aerospace & acoustic technology, Skyted is able to reduce mask size by 1/10th of competitor mask size.",
  },
  {
    point: "Product is manufactured with bio sourced or recycled material.",
  },
  {
    point: "Product is earbud agnostic and can pair with any phone or call operators like Zoom through a Bluetooth connection.",
  },
];

function Factors() {
  return (
    <section className="blur-bg section-wrapper">
      <div className="flex flex-col md:flex-row justify-center items-center section-container">
        <div className="md:w-3/5 order-2 md:order-1">
          <div data-aos="fade-in" className="mb-3 max-w-xl">
            <h6 className="text-xl font-medium text-dark-blue">Discover Key Factors</h6>
            <p className="py-4 text-base md:text-lg font-light tracking-wide">
              Skyted has collaborated with the French DARPA to embed small resonators into the mask,
              previously developed to silence jet engines. These resonators are 10 times more
              powerful than existing masks in the market.
            </p>
          </div>
          <div data-aos="fade-in">
            <h6 className="text-xl font-medium text-dark-blue">This gives the product exclusive advantages:</h6>
            <ul className="space-y-2 list-disc p-4 text-base md:text-lg font-light tracking-wide">
              {points.map((point, i) => <li key={i}>{point.point}</li>)}
            </ul>
          </div>
        </div>
        <div className="md:w-2/5 order-1 md:order-2">
          <div data-aos="fade-in" className="mx-auto mb-8 md:mb-0 scale-110">
            <img src={MaskMan} alt="product" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Factors;
