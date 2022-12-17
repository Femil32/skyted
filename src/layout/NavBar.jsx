import { gsap } from "gsap";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ navState, handleNav }) => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
      state: {},
    },
    {
      title: "About",
      link: "/about",
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
      title: "News",
      link: "/news",
      state: {},
    },
    {
      title: "Contact",
      link: "/contact",
      state: {},
    },
  ];

  const nav = useRef();

  useEffect(() => {
    const t1 = gsap.timeline();
    if (navState.isClicked === false) {
      console.log(navState);
      t1.fromTo(".nav-link", {
        xPercent: 0,
        opacity: 1,
      }, {
        stagger: 0.05,
        xPercent: -20,
        opacity: 0,
      }).to([".outer", ".inner"], {
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
    } else if (navState.isClicked === true
      || (navState.isClicked === true && navState.initial === null)
    ) {
      t1.to(".main-nav", {
        duration: 0,
        css: {
          display: "block",
        },
      });
      t1.fromTo([".inner", ".outer"], {
        height: 0,
      }, {
        stagger: 0.2,
        duration: 0.5,
        ease: "easeIn",
        height: "100vh",
      }).fromTo(".nav-link", {
        xPercent: -20,
        opacity: 0,
      }, {
        stagger: 0.05,
        xPercent: 0,
        opacity: 1,
      });
    }
  }, [navState]);

  return (
    <nav ref={nav} className="main-nav transform transition-all w-full hidden overflow-hidden fixed top-0 left-0 h-screen z-50">
      <div className="fixed inner h-full w-screen bg-blue-600 left-0 top-0 z-10" />
      <div className="fixed outer h-full w-screen  navbar-bg left-0 top-0 z-10" />
      <div className="wrapper justify-between items-center section-container h-full w-full flex z-50 relative">
        <button type="button" className="nav-link absolute top-16 left-1/2 -translate-x-1/2 text-black bg-white flex justify-center items-center rounded-full w-14 h-14" onClick={handleNav}>
          x
        </button>
        <div className="flex justify-between w-full items-start">
          <div className="">
            <ul className="nav-links space-y-4 leading-3">
              {
                navLinks.map((link, i) => (
                  <li
                    key={i}
                    className="nav-link"
                  >
                    <NavLink
                      to={link.link}
                      state={link.state}
                      className={({ isActive }) => `${isActive ? "text-red-900" : "text-white"} transition-all font-bold text-6xl uppercase tracking-tight px-2`}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <aside className="border-l-4 px-8 max-w-sm nav-link">
            <h3 className="text-2xl mb-10">Skyted.inc</h3>
            <div className="text-light-gray">
              <address className="mb-6">
                B612 – Toulouse Aerospace Innovation
                ParkToulouse, France
              </address>
              <a
                href="mailto:skypted.puricare@contact.in"
                className="underline block"
              >
                skypted.puricare@contact.in
              </a>
            </div>
          </aside>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  handleNav: PropTypes.func.isRequired,
  navState: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default NavBar;
