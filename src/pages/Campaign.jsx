import React, { useEffect, useState } from "react";
import Banner from "../components/campaign/Banner";
import FAQ from "../components/campaign/FAQ";
import Form from "../components/campaign/Form";
import PreOrder from "../components/campaign/PreOrder";
import Loader from "../components/common/Loader";
import useAxios from "../hooks/useAxios";

function Campaign() {
  const [campaignData, setCampaignData] = useState([]);
  const { error, response, loading } = useAxios({
    url: "kick-starter-pages/1",
    method: "get",
  });

  useEffect(() => {
    console.log(error);
    setCampaignData(response?.data?.attributes?.KickstarterPage);
    console.log(response?.data?.attributes?.KickstarterPage[0]);
  }, [error, response]);

  return (
    <main className="bg-white text-black">
      {loading ? <Loader />
        : (
          <>
            <Banner response={campaignData?.[0]} />
            <PreOrder />
            <Form response={campaignData?.[1]} />
            <FAQ response={campaignData?.[2]} />
          </>
        )}
    </main>
  );
}

export default Campaign;
