import React, { useState } from "react";
import { CustomIMG, PageHeader } from "../Micro";
// imgs
import MaskBlackIMG from "../../assets/imgs/profileKit/mask-black.png";
import MaskSideIMG from "../../assets/imgs/profileKit/mask-side.png";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 0,
      imgUrl: MaskBlackIMG,
      title: "Gamer Line – Silent Mask Headset",
      description: `Skyted is currently designing a new headset designed
      to support passenger in their next travel...More`,
    },
    {
      id: 1,
      imgUrl: MaskSideIMG,
      title: "Business Line – Silent Mask Headset",
      description: `Skyted is currently designing a new headset designed
      to support passenger in their next travel. Combiget in
      touch wih us to promote how we could support Silent
      calls and silent games.`,
    },
  ]);

  return (
    <section className="section-container">
      <div className="flex justify-center items-center flex-col gap-4 lg:gap-8">
        <PageHeader title="Our Product" />
        <div className="flex justify-center items-center gap-9 max-md:flex-col">
          {products?.map((product) => (
            <div key={product.id} className="p-1 overflow-hidden max-w-lg">
              <CustomIMG
                data-aos="fade-in"
                src={product.imgUrl}
                alt="mask"
                className="w-full rounded-3xl"
              />
              <div className="mt-8">
                <h4 data-aos="fade-in" className="text-xl mb-4">
                  {product.title}
                </h4>
                <p data-aos="fade-in" className="text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
