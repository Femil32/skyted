import React, { useState } from "react";
import { Link } from "react-router-dom";
// imgs
import BlogOneIMG from "../../assets/imgs/news/blog-one.png";
import BlogSecondIMG from "../../assets/imgs/news/blog-second.png";
import BlogThreeIMG from "../../assets/imgs/news/blog-three.png";
// import useFetach from "../../hooks/useFetch";
import { CustomIMG } from "../Micro";

function Blogs() {
  // const { data, loading, error } = useFetach("blogs");
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([
    {
      id: 0,
      date: "2023-01-04",
      imgUrl: BlogOneIMG,
      title: "Gamer Line – Silent Mask Headset",
      description: "Skyted is currently designing a new headset designed to support passenger in their next travel in their next travel",
    },
    {
      id: 1,
      date: "2023-01-04",
      imgUrl: BlogSecondIMG,
      title: "Gamer Line – Silent Mask Headset",
      description: "Skyted is currently designing a new headset designed to support passenger in their next travel in their next travel",
    },
    {
      id: 3,
      date: "2023-01-04",
      imgUrl: BlogThreeIMG,
      title: "Gamer Line – Silent Mask Headset",
      description: "Skyted is currently designing a new headset designed to support passenger in their next travel in their next travel",
    },
  ]);
  return (
    <section className="section-container">
      <div className="container mx-auto md:py-24">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-8 sm:gap-6">
          {
            blogs.map((blog) => (
              <Link to={`/news/${blog.title}`} key={blog.id}>
                <div
                  className="cursor-pointer transition-all md:p-6 rounded-[1.8rem] max-md:mb-8"
                >
                  <CustomIMG src={blog.imgUrl} className="rounded-3xl overflow-hidden mb-6" ImgClassName="object-cover w-full h-full" />
                  <div className="flex flex-col gap-3 justify-start items-start">
                    <span className="text-gray-500">{blog.date}</span>
                    <h3 className="text-3xl">{blog.title}</h3>
                    <div className="text-gray-500">
                      {blog.description.length > 110 ? (
                        <p>
                          {blog.description.replace(/^(.{110}[^\s]*).*/, "$1")}
                          {" "}
                          <span className="text-twitter/80">...More</span>
                        </p>
                      ) : blog.description}

                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Blogs;
