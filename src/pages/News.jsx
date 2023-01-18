import React from "react";
import { PageHeader } from "../components/Micro";
import Blogs from "../components/news/Blogs";
import SpotlightNew from "../components/news/SpotlightNew";

function News() {
  return (
    <main className="bg-white text-black">
      <section
        data-aos="fade-in"
        data-aos-delay="300"
        className="container mx-auto md:mt-28 mt-24 mb-5"
      >
        <PageHeader title="News" className="text-center mb-0" />
      </section>
      <SpotlightNew />
      <Blogs />
    </main>
  );
}

export default News;
