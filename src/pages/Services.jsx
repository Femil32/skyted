import React, { useEffect, useState } from "react";

import { PageHeader } from "../components/Micro";
import HeadPhoneGirlIMG from "../assets/imgs/services/headphone-girl.png";
import PlanGirlIMG from "../assets/imgs/services/plan-girl.png";
import VRPeopleIMG from "../assets/imgs/services/vr-people.png";
import ImgData from "../components/common/ImgData";
import ContactUS from "../components/home/ContactUS";
import useAxios from "../hooks/useAxios";

function Services() {
  const { response, error, loading } = useAxios({
    method: "get",
    url: "/service-pages/1",
  });

  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      console.log(response?.data?.attributes?.ServicePage[0]);
      setServiceData(response?.data?.attributes?.ServicePage);
    }
  }, [response]);

  const services = [
    {
      title: "Travellers",
      tagline: "Our Mask offers you the best call privacy and comfort during your travel.",
      img: PlanGirlIMG,
      points: [
        "Did you ever try to jump on a call in a noisy Starbucks?",
        "Do you want to share your life with your taxi driver?",
        "Do you think that sharing confidential information in an open space is compliant?",
      ],
      data: `Post Covid, two billion hybrid workers need to handle pre
      Covid travel habits and 6 to 10 calls a day. This implies a
      huge amount of stress for 56% of workers who have
      been offered a remote job and must adapt to calls & video
      calls in “on the go” situations.`,
    },
    {
      title: "Office / Call center",
      tagline: "Our mask supports many of any companies’ ESG targets and employees well-being:",
      img: HeadPhoneGirlIMG,
      points: [
        "It reduces office real estate requests for closed office or call cabin by limiting every staff’s voiceprint in the office with a 1/20 ratio.",
        "There is currently no solution to stopping your own voice from being overheard and voices can carry up to 30 feet during a phone call in the office",
        "There is no existing device to handle calls everywhere at any time, without needing to be in a closed space, an office, or a room with walls, until Skyted Speech privacy solutions…",
      ],
      data: null,
    },
    {
      title: "Metaverse",
      tagline: "78% of gamers have issues with their families as they scream during games.",
      img: VRPeopleIMG,
      points: [
        "Stress and laser focus during gaming activities is the essence of gaming.",
        "Players experience a “tunnel effect” where their cognitive capacity to master their voice is disconnected.",
        "Even more, excitement distorts Speech tone up to 4000 hz and rings an alarm with other family members'.",
        "Skyted, through its custom design resonators, specializes in designing a sound absorber to reduce voice impactful frequencies.",
        "You can scream into your mask without waking up the whole family.",
      ],
      data: null,
    },
  ];
  return (
    <>
      <main className="xl:py-16 pt-12 pb-0 bg-white">
        {
          serviceData?.map((service, i) => {
            const { ServiceTitle, ServiceSubtitle } = service;
            const { url } = service?.ServiceImage?.data?.attributes;
            return (
              <section className={`${i % 2 === 0 ? "bg-white" : "bg-[#F7FAFB]"} text-black section-container`} key={i}>
                <div>
                  <header className="text-center xl:mb-12 mb-5">
                    <PageHeader title={ServiceTitle} />
                    <h6>{ServiceSubtitle}</h6>
                  </header>
                  <ImgData

                    dataClasses={`${i % 2 === 0 ? "md:order-1" : "md:order-2"} md:pl-10 max-md:px-4`}
                    imgClasses={`${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                    src={url}
                    alt={ServiceTitle}
                    description={(
                      <>
                        <ul className="list-disc list-outsides space-y-4">
                          {service?.points?.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                        {service.data && <p className="mt-4">{service?.data}</p>}
                      </>
                    )}
                  />
                </div>
              </section>
            );
          })
        }
      </main>
      <ContactUS />
    </>
  );
}

export default Services;
