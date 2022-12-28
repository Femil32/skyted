import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon,
} from "../components/AllSvgs";
import { SkytedLogo } from "../components/Micro";

const Footer = () => (
  <div className="section-wrapper bg-gray-100 text-black mt-auto">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 section-container">
      <div className="flex flex-col max-md:items-center md:max-w-xs">
        <div data-aos="fade-in" className="logo mb-4 md:mb-8 md:text-left text-center">
          <SkytedLogo className="w-32" isBlack />
        </div>
        <p data-aos="fade-in" className="mb-4 md:mb-8 xl:text-base text-sm md:text-left text-center">
          Based in Toulouse Fr, Skyted’s team is
          obsessed with speechless calls. We are
          backed by Airbus dev.
        </p>
        <small data-aos="fade-in" className="text-gray-400 md:text-left text-center">©skyted.inc - 2022</small>
      </div>
      <div>
        <div className="flex flex-col">
          <div data-aos="fade-in" className="red-header text-lg xl:mb-8 lg:mb-6 mb-5 md:text-left text-center">Usefull Links</div>
          <div data-aos="fade-in" className="flex">
            <ul className="flex-1 flex flex-col gap-2 md:items-start items-center ">
              <li>
                <Link to="/" className="footer-link xl:text-base text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link xl:text-base text-sm">About</Link>
              </li>
              <li>
                <Link to="/product" className="footer-link xl:text-base text-sm">Product</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link xl:text-base text-sm">Services</Link>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-2 md:items-start items-center">
              <li>
                <Link to="/ces" className="footer-link xl:text-base text-sm">CES</Link>
              </li>
              <li>
                <Link to="/media-kit" className="footer-link xl:text-base text-sm">Media Kit</Link>
              </li>
              <li>
                <Link to="/campaign" className="footer-link xl:text-base text-sm">Kick Starter</Link>
              </li>
              <li>
                <Link to="/contact" className=" xl:text-base text-sm">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 md:col-span-2 lg:mx-0 mx-auto">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div data-aos="fade-in" data-aos-offset="0" className="red-header text-lg lg:mb-6 mb-5 lg:text-left text-center">Socially</div>
            <div data-aos="fade-in" data-aos-offset="0" className="flex">
              <ul className="flex md:flex-nowrap flex-wrap xl:gap-6 gap-4 ">
                <li className="social-icon hover:bg-fb hover:text-white">
                  <FacebookIcon />
                </li>
                <li className="social-icon hover:bg-insta hover:text-white">
                  <InstagramIcon />
                </li>
                <li className="social-icon hover:bg-linkedin hover:text-white">
                  <LinkedInIcon />
                </li>
                <li className="social-icon hover:bg-yt hover:text-white">
                  <YoutubeIcon />
                </li>
                <li className="social-icon hover:bg-twitter hover:text-white">
                  <TwitterIcon />
                </li>
              </ul>
            </div>
          </div>
          <h6 data-aos="fade-in" data-aos-offset="1" className="text-sm lg:mt-0 mt-8 md:mt-3 max-lg:text-center">
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

export default Footer;
