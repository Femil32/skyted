import React from "react";
import Banner from "../components/campaign/Banner";
import FAQ from "../components/campaign/FAQ";
import Form from "../components/campaign/Form";
import PreOrder from "../components/campaign/PreOrder";

function Campaign() {
  return (
    <main className="bg-white text-black">
      <Banner />
      <Form />
      <PreOrder />
      <FAQ />
    </main>
  );
}

export default Campaign;
