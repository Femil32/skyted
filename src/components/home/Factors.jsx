import React from "react";
import MaskMan from "@/assets/imgs/Masque-noire.png";

const points = [
  {
    point: "80% of the voice vibration is absorbed",
  },
  {
    point: "External noise will not ne picked by the internal microphone",
  },
  {
    point: `This makes our mask so special compared to Covid mask:
            The airflow can move without constraints in and out the
            mask as from a jet Engine.`,
  },
  {
    point: `By using cutting edge aerospace & acoustic technology,
            Skyted is able to reduce mask size with 1/10th of competitor mask size`,
  },
  {
    point: "Product can be manufactured with bio sourced or recycled material",
  },
  {
    point: `Product is earbud agnostic and can pair by bluetooth with any phone or call
            operators like Zoom through a Bluetooth connection.`,
  },
];

function Factors() {
  return (
    <section className="factors section-container">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-3/5 order-2 md:order-1">
          <div className="mb-3 max-w-xl">
            <h6 className="text-xl font-medium text-blue-700">Discover Key Factors</h6>
            <p className="py-4 text-base md:text-lg">
              Skyted has collaborated with the French DARPA to embed small resonators into the mask,
              previously develop to silence jet engines. These resonators are 10 times more powerful
              than existing silencing device previously design as mask
            </p>
          </div>
          <div>
            <h6 className="text-xl font-medium text-blue-700">This gives the product exclusive advantages:</h6>
            <ul className="space-y-2 list-disc p-4 text-base md:text-lg">
              {points.map((point, i) => <li key={i}>{point.point}</li>)}
            </ul>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="w-44 md:w-72 mx-auto mb-8 md:mb-0">
            <img src={MaskMan} alt="product" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Factors;
