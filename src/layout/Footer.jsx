import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon,
} from "../components/AllSvgs";
import { SlatePara } from "../components/Micro";

const Footer = () => (
  <div className="foolter bg-gray-100 section-container text-black">
    <div className="grid md:grid-cols-3 gap-6 md:gap-0">
      <div className="flex flex-col max-w-xs">
        <div className="logo mb-4 md:mb-8">Skyted.</div>
        <p className="mb-4 md:mb-8">
          Based in Toulouse Fr, Skyted’s team is
          obsessed with speechless calls. We are
          backed by Airbus dev.
        </p>
        <small className="text-gray-400">©skyted.inc - 2022</small>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="red-header text-lg mb-4 md:mb-8">Usefull Links</div>
          <div className="flex">
            <ul className="flex-1 flex flex-col gap-2">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/" className="footer-link">Product</Link>
              </li>
              <li>
                <Link to="/" className="footer-link">Service</Link>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-2">
              <li>
                <Link to="/" className="footer-link">News/media</Link>
              </li>
              <li>
                <Link to="/" className="footer-link">Contact</Link>
              </li>
              <li>
                <Link to="/" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="red-header text-lg mb-4 md:mb-8">Socially</div>
            <div className="flex">
              <ul className="flex gap-6">
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
          <h6 className="flex text-sm gap-2">
            <span>Design by</span>
            <a href="https://digipie.net/" target="_blank" rel="noreferrer" className="font-medium">Digipie</a>
          </h6>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
