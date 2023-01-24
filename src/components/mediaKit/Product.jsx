import React from "react";
import { CustomIMG, PageHeader } from "../Micro";
// imgs
import { getImg } from "../../helpers";

function Product({ response }) {
  return (
    <section className="section-container">
      <div className="flex justify-center items-center flex-col gap-4 lg:gap-8">
        <PageHeader title={response?.OurProductTitle} />
        <div className="flex justify-center items-center gap-9 max-md:flex-col">
          {response?.OurProductList?.map((product) => (
            <div key={product?.id} className="p-1 overflow-hidden max-w-lg">
              <CustomIMG
                src={getImg(product?.OurProductImage)}
                alt="mask"
                className="w-full rounded-3xl"
              />
              <div className="mt-8">
                <h4 className="text-xl mb-4">
                  {product?.OurProductTitle}
                </h4>
                <p className="text-sm">
                  {product?.OurProductDescription}
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
