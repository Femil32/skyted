import React, { useState } from "react";
import { PageHeader, CustomIMG } from "../Micro";

// imgs
import CnetIMG from "../../assets/imgs/home/cnet.png";
import DailyMailIMG from "../../assets/imgs/home/dailymail.png";
import forbesIMG from "../../assets/imgs/home/forbes.png";
import GadgetFlowIMG from "../../assets/imgs/home/gadget flow.png";
import MirrorIMG from "../../assets/imgs/home/mirror.png";
import ReutersIMG from "../../assets/imgs/home/reuters.png";
import VentureBeatIMG from "../../assets/imgs/home/venture beat.png";
import WsjIMG from "../../assets/imgs/home/WSJ.png";

function MeadiaOutlets() {
  const [patners, setPatners] = useState([
    {
      id: 3,
      imgUrl: CnetIMG,
    },
    {
      id: 4,
      imgUrl: DailyMailIMG,
    },
    {
      id: 5,
      imgUrl: forbesIMG,
    },
    {
      id: 6,
      imgUrl: GadgetFlowIMG,
    },
    {
      id: 7,
      imgUrl: MirrorIMG,
    },
    {
      id: 8,
      imgUrl: ReutersIMG,
    },
    {
      id: 9,
      imgUrl: VentureBeatIMG,
    },
    {
      id: 10,
      imgUrl: WsjIMG,
    },
  ]);
  return (
    <section className="section-container lg:py-[60px] bg-white text-black border-b">
      <PageHeader title="Meadia Outlets" className="text-center" />
      <div className="container mx-auto grid grid-cols-4 gap-12">
        {patners.map((patner) => (
          <div className="w-full h-48 overflow-hidden">
            <CustomIMG src={patner.imgUrl} ImgClassName="w-full object-contain" className="w-full h-full flex justify-center items-center" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeadiaOutlets;
