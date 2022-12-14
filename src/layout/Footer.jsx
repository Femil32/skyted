import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="foolter bg-gray-100 section-container text-black">
    <div className="grid md:grid-cols-3 gap-6 md:gap-0">
      <div className="flex flex-col">
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Service</Link>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-2">
              <li>
                <Link to="/">News/media</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="red-header text-lg mb-4 md:mb-8">Socially</div>
          <div className="flex">
            <ul className="flex gap-6">
              <li className="social-icon">1</li>
              <li className="social-icon">1</li>
              <li className="social-icon">1</li>
              <li className="social-icon">1</li>
              <li className="social-icon">1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
