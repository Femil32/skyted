import React from "react";
import { CustomIMG, PageHeader } from "../Micro";
import MediaKitIMG from "../../assets/imgs/meadia-kit.png";

function MeadiaKit() {
  return (
    <section className="section-container">
      <div className="flex justify-center items-center flex-col gap-8 pt-12">
        <PageHeader title="Our Media Kit" />
        <CustomIMG src={MediaKitIMG} alt="skyted" className="w-32" />
      </div>
    </section>
  );
}

export default MeadiaKit;
