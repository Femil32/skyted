/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomIMG } from "../components/Micro";
import { getImg } from "../helpers";
import useAxios from "../hooks/useAxios";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const { error, response, loading } = useAxios({
    url: "footers/1",
    method: "get",
  });

  useEffect(() => {
    console.log(error);
    setFooterData(response?.data?.attributes?.Footer);
    console.log(response?.data?.attributes?.Footer);
  }, [error, response]);

  return (
    <div className="section-container bg-gray-100 text-black">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        <div className="flex flex-col max-md:items-center md:max-w-xs">
          <div className="logo mb-4 md:mb-8 md:text-left text-center">
            <CustomIMG src={getImg(footerData?.[0]?.CompanyImage)} className="w-32" />
          </div>
          <p className="mb-4 md:mb-8 xl:text-base text-sm md:text-left text-center">
            {footerData?.[0]?.CompanyDetail}
          </p>
          <small className="text-gray-400 md:text-left text-center">{footerData?.[0]?.CompanySince}</small>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="red-header text-lg xl:mb-8 lg:mb-6 mb-5 md:text-left text-center">{footerData?.[1]?.UseFullTitle}</div>
            <div className="flex">
              <ul className="flex-1 flex flex-wrap md:items-start items-center ">
                {footerData?.[1]?.UseFullLink?.map((data) => (
                  footerData?.[1]?.UseFullLink.length / 2 && (
                    <li className="w-1/2 mb-3">
                      <Link to={data?.UsefullUrl} className="footer-link xl:text-base text-sm">{data?.UsefullTitle}</Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 lg:mx-0 mx-auto">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="red-header text-lg lg:mb-6 mb-5 lg:text-left text-center">{footerData?.[2]?.SocialItemTitle}</div>
              <div className="flex">
                <ul className="flex md:flex-nowrap flex-wrap xl:gap-6 gap-4 ">
                  {footerData?.[2]?.SocialItemList?.map((plateform) => (
                    <a
                      className="social-icon hover:text-white overflow-hidden"
                      onMouseOver={(e) => e.target.style.background = plateform?.HoverColor}
                      onMouseLeave={(e) => e.target.style.background = "#ffffff"}
                      href={plateform?.SocialLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CustomIMG src={getImg(plateform?.SocialIcon)} />
                      {/* <FacebookIcon /> */}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
            <h6 className="text-sm lg:mt-0 mt-3 max-md:text-center">
              <span>
                Design by
                {" "}
              </span>
              <a href="https://digipie.net/" target="_blank" rel="noreferrer" className="font-bold red-header inline-block transition-all">Digipie</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
