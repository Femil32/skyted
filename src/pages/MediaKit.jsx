import React, { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import ContactUS from "../components/home/ContactUS";
import Influencer from "../components/mediaKit/Influencer";
import Press from "../components/mediaKit/Press";
import Product from "../components/mediaKit/Product";
import useAxios from "../hooks/useAxios";

function MediaKit() {
  const [mediaData, setMediaData] = useState([]);
  const { error, response, loading } = useAxios({
    url: "media-kits/1",
    method: "get",
  });

  useEffect(() => {
    console.log(error);
    setMediaData(response?.data?.attributes?.MediaKitPage);
  }, [error, response]);

  return (
    <main className="bg-white text-black">
      {loading ? <Loader />
        : (
          <>
            {/* <MediaKit /> */}
            <Press response={mediaData?.[0]} />
            <Product response={mediaData?.[1]} />
            <Influencer response={mediaData?.[2]} />
            <ContactUS />
          </>
        )}
    </main>
  );
}

export default MediaKit;
