import React, { useState } from "react";
import { CustomIMG, PageHeader } from "../Micro";

// imgs
import ClockIMG from "../../assets/imgs/product/clock.png";
import HeadphoneIMG from "../../assets/imgs/product/headphone.png";
import FolderIMG from "../../assets/imgs/product/folder.png";
import HeartIMG from "../../assets/imgs/product/heart.png";

function Technology() {
  const [techData, setTechData] = useState([
    {
      icon: FolderIMG,
      title: "Confidentiality",
      description: "people next to you can listen to your conversation",
    },
    {
      icon: HeadphoneIMG,
      title: "Quality",
      description: "noise pollution resulting from open surroundings",
    },
    {
      icon: ClockIMG,
      title: "Flexibility",
      description: "stress induced to find a proper call spot or room",
    },
    {
      icon: HeartIMG,
      title: "Health",
      description: "Covid Mask in pandemic context",
    },
  ]);

  return (
    <section className="section-container">
      <div className="grid grid-cols-10">
        <div className="row-span-full col-span-2 flex flex-col gap-4 ">
          <span className="block flex-1 mx-auto border-2 bg-black border-black " />
          <h1 className="product-label mx-auto text-6xl text-gray-200 font-radwave relative">Technology</h1>
        </div>
        <div className="row-span-full col-span-7">
          <PageHeader title="Creating new communication pain points in crowded, on-the-go environments." className="mb-14" />
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            {techData.map((data, i) => (
              <div key={i} className="flex justify-start gap-12 items-center px-12 py-16 bg-[#001432]/10 rounded-3xl">
                <CustomIMG src={data.icon} className="w-12" />
                <div>
                  <h2 className="text-2xl mb-3">{data.title}</h2>
                  <p className="text-sm">{data.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
