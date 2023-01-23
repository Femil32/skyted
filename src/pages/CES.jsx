import React, { useState, useEffect } from "react";
import CesForm from "../components/ces/CesForm";
import Hero from "../components/ces/Hero";
import Influencer from "../components/ces/Influencer";
import Users from "../components/ces/Users";
import Loader from "../components/common/Loader";
import useAxios from "../hooks/useAxios";

function CES() {
  const [cesData, setCesData] = useState([]);
  const { error, response, loading } = useAxios({
    url: "cse-pages/1",
    method: "get",
  });

  useEffect(() => {
    console.log(error);
    setCesData(response?.data?.attributes?.CSEpages);
    console.log(response?.data?.attributes?.CSEpages[3]);
  }, [error, response]);
  return (
    <main className="bg-white text-black">
      {loading ? <Loader />
        : (
          <>
            <Hero response={cesData?.[0]} />
            <div className="bg-black text-white">
              <Users businessRes={cesData?.[1]} gamersRes={cesData?.[2]} />
              <Influencer response={cesData?.[3]} />
              <CesForm />
            </div>
          </>
        )}
    </main>
  );
}

export default CES;
