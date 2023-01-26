import React, { useEffect, useState } from "react";
import Form from "../components/campaign/Form";
import Loader from "../components/common/Loader";

// pages
import About from "../components/home/About";
import ContactUS from "../components/home/ContactUS";
import Events from "../components/home/Events";
import Factors from "../components/home/Factors";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import MediaOutlets from "../components/home/MediaOutlets";
import Patners from "../components/home/Patners";
import useAxios from "../hooks/useAxios";

// const { } = useAxios()
const Home = () => {
  const [heroData, setHeroData] = useState([]);
  const { error, response, loading } = useAxios({
    url: "homepages/1",
    method: "get",
  });

  useEffect(() => {
    console.log(error);
    setHeroData(response?.data?.attributes?.HomePage);
    // console.log(response?.data?.attributes?.HomePage);
  }, [error, response]);

  return (
    <main>
      {loading ? <Loader />
        : (
          <>
            <Hero response={heroData?.[0]} />
            <Form setMargins response={heroData?.[1]} />
            <Patners response={heroData?.[2]} />
            <About response={heroData?.[3]} />
            <MediaOutlets response={heroData?.[4]} />
            <Features response={heroData?.[5]} />
            <Factors response={heroData?.[6]} />
            <Events response={heroData?.[7]} />
            <FAQ response={heroData?.[8]} />
            <ContactUS response={heroData?.[9]} />
          </>
        )}
    </main>
  );
};

export default Home;
