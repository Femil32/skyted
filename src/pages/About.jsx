import React, { useState, useEffect } from "react";
import FactsAndFigures from "../components/about/FactsAndFigures";
import Hero from "../components/about/Hero";
import MarketAndWhy from "../components/about/MarketAndWhy";
import Mission from "../components/about/Mission";
import Profiles from "../components/about/Profiles";
import Loader from "../components/common/Loader";
import ContactUS from "../components/home/ContactUS";
import useAxios from "../hooks/useAxios";

function About() {
  const [aboutData, setAboutData] = useState([]);
  const { error, response, loading } = useAxios({
    url: "about-us-pages/1",
    method: "get",
  });

  useEffect(() => {
    console.log(error);
    setAboutData(response?.data?.attributes?.AboutUsPage);
  }, [error, response]);

  return (
    <main className="bg-white text-black">
      {loading ? <Loader />
        : (
          <>
            <Hero response={aboutData?.[0]} />
            <Mission response={aboutData?.[1]} boxResponse={aboutData?.[2]} />
            <Profiles response={aboutData?.[3]} />
            <FactsAndFigures response={aboutData?.[4]} />
            <MarketAndWhy response={[aboutData?.[5], aboutData?.[6]]} />
            <ContactUS />
          </>
        )}
    </main>
  );
}

export default About;
