import React from "react";
import { CustomIMG, PageHeader } from "../Micro";
import MediaKitIMG from "../../assets/imgs/meadia-kit.png";

function MediaKit() {
  return (
    <section className="section-container max-lg:mb-10">
      <div className="flex justify-center items-center flex-col lg:gap-8 gap-4 pt-12">
        <CustomIMG
          src={MediaKitIMG}
          alt="skyted"
          className=""
        />
      </div>
    </section>
  );
}

export default MediaKit;
