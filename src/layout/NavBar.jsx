import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import LogoNav from "@/assets/imgs/logo-nav.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
  TwitterIcon,
} from "../components/AllSvgs";

const NavBar = ({ navState, handleNav }) => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
      state: {},
    },
    {
      title: "Product",
      link: "/product",
      state: {},
    },
    {
      title: "Services",
      link: "/services",
      state: {},
    },
    {
      title: "CES",
      link: "/ces",
      state: {},
    },
    {
      title: "Kickstarter",
      link: "/campaign",
      state: {},
    },
    {
      title: "Media Kit",
      link: "/media-kit",
      state: {},
    },
    {
      title: "About",
      link: "/about",
      state: {},
    },

    // {
    //   title: "News",
    //   link: "/news",
    //   state: {},
    // },
    {
      title: "Contact",
      link: "/contact",
      state: {},
    },
    {
      title: "News",
      link: "/news",
      state: {},
    },
  ];

  const nav = useRef();

  useEffect(() => {
    const t1 = gsap.timeline();
    if (navState.isClicked === false) {
      t1.fromTo(
        ".nav-link",
        {
          yPercent: 0,
          opacity: 1,
        },
        {
          stagger: 0.05,
          yPercent: -20,
          opacity: 0,
        },
      ).to([".outer"], {
        stagger: {
          amount: 0.07,
        },
        duration: 0.8,
        ease: "power3.inOut",
        height: 0,
      });

      t1.to(".main-nav", {
        duration: 0,
        css: {
          display: "none",
        },
      });
    } else if (
      navState.isClicked === true
      || (navState.isClicked === true && navState.initial === null)
    ) {
      t1.to(".main-nav", {
        duration: 0,
        css: {
          display: "block",
        },
      });
      t1.fromTo(
        [".outer"],
        {
          height: 0,
        },
        {
          stagger: 0.2,
          duration: 0.5,
          ease: "easeIn",
          height: "100vh",
        },
      ).fromTo(
        ".nav-link",
        {
          yPercent: -20,
          opacity: 0,
        },
        {
          stagger: 0.05,
          yPercent: 0,
          opacity: 1,
        },
      );
    }
  }, [navState]);

  return (
    <nav
      ref={nav}
      className="main-nav transform transition-all w-full hidden overflow-hidden fixed top-0 left-0 bottom-0 right-0 h-screen z-50"
    >
      {/* <div className="fixed inner h-full w-screen bg-blue-600 left-0 top-0 z-10" /> */}
      <div className="fixed outer h-full w-screen  navbar-bg left-0 top-0 z-10" />
      <div className="wrapper md:justify-between justify-center items-center section-container h-full w-full flex z-50 relative flex-col md:flex-row max-sm:gap-10">
        <div className="flex relative md:justify-between justify-center w-full items-start text-center sm:text-left">
          <div className="">
            <ul className="nav-links md:space-y-3 space-y-2 leading-3">
              {navLinks.map((link, i) => (
                <li key={i} className="nav-link">
                  <NavLink
                    onClick={() => handleNav(true)}
                    to={link.link}
                    state={link.state}
                    className={({ isActive }) => `${isActive ? "text-red-900" : "text-white"} transition-all font-bold xl:text-5xl lg:text-3xl text-xl uppercase
                      tracking-tight px-2`}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}

              <li className="flex">
                <a className="hover:text-white w-full nav-link" href="https://www.facebook.com/#" target="_blank" rel="noreferrer">
                  <FacebookIcon />
                </a>
                <a className="hover:text-white w-full nav-link" href="https://www.instagram.com/#" target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
                <a className="hover:text-white w-full nav-link" href="https://www.linkedin.com/#" target="_blank" rel="noreferrer">
                  <LinkedInIcon />
                </a>
                <a className="hover:text-white w-full nav-link" href="https://www.youtube.com/#" target="_blank" rel="noreferrer">
                  <YoutubeIcon />
                </a>
                <a className="hover:text-white w-full nav-link" href="https://www.twitter.com/#" target="_blank" rel="noreferrer">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
          <aside className="border-l-2 border-gray-100/10 px-8 max-w-sm nav-link hidden md:block">
            <h3 className="xl:text-2xl text-xl mb-10">Skyted.inc</h3>
            <div className="text-light-gray">
              <address className="mb-6 lg:text-base text-sm">
                B612 – Toulouse Aerospace Innovation ParkToulouse, France
              </address>
              <a
                href="mailto:info@skypted.io"
                className="underline block lg:text-base text-sm"
              >
                info@skyted.io
              </a>
            </div>
          </aside>
        </div>
        <div className="md:absolute bottom-24 right-28 xl:max-w-lg lg:max-w-sm max-sm:w-44 nav-link">
          <img src={LogoNav} alt="skyted" className="w-full h-full" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  navState: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleNav: PropTypes.func.isRequired,
};
