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
      description: "Inspired by the pure love for video gaming, Skyted launches a mask designed specifically for gamers. A comfortable, easy to breathe through soundproof mask that allows you to play games anywhere, anytime. Scream and shout without the worry of disturbing anyone.",
    },
    {
      id: 1,
      imgUrl: MaskSideIMG,
      title: "Business Line – Silent Mask Headset",
      description: "A mask that silences your voice and helps you make confidential calls in noisy crowded environments. Developed using open air technology which makes it comfortable to wear and make calls anytime anywhere.",
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
