import React from "react";
import ImgData from "../common/ImgData";
// imgs
import MaskManIMG from "../../assets/imgs/about/mask-man.png";
import HeadphoneManIMG from "../../assets/imgs/about/Why now_.png";

function MarketAndWhy() {
  return (
    <section className="section-container pt-0">
      <div className="xl:space-y-32 md:space-y-20 space-y-8">
        <ImgData

          imgClasses="max-md:order-1"
          dataClasses="max-md:order-2"
          title="About the market"
          description={`The arrival of the global pandemic in 2020, with the accompanying
            proliferation of remote and hybrid work, has underscored the need for such a device
            well beyond travelers, incorporating office workers, gamers and more. Skyted allows
            confidential and silent calls that are perfect for hybrid work providing total
            comfort and speech privacy in a multitude of settings.`}
          src={MaskManIMG}
          alt="MaskManIMG"
        />
        <ImgData

          dataClasses="order-2 md:pl-6"
          title="Why now?"
          description={(
            <>
              <p>
                Skyted is laser focused to absorb or convert the Voice energy to
                make calls silent simply because there is no solution on the
                market.
              </p>
              <p>
                There is currently no solution to blocking your own voice from being overheard and voices
                can carry up to 30-feet during a phone call.
              </p>
              <p>
                There is no existing device to handle calls everywhere at any
                time, without needing to be in a closed space, an office, or a
                room with walls.
              </p>
              <p>
                We dedicate our time with cutting edge technology to solve this
                pain point and give back freedom of speech to everybody.
              </p>
            </>
          )}
          src={HeadphoneManIMG}
          alt="HeadphoneManIMG"
        />
      </div>
    </section>
  );
}

export default MarketAndWhy;
