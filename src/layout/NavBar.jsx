import { gsap } from "gsap";
import PropTypes from "prop-types";
import React, { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isNavOpen, setIsNavOpen }) => {
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(".inner", {
        width: 0,
      }, {
        stagger: 0.2,
        duration: 0.5,
        ease: "easeIn",
        width: "100%",
      }).fromTo(".nav-link", {
        xPercent: -20,
        opacity: 0,
      }, {
        stagger: 0.05,
        xPercent: 0,
        opacity: 1,
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={nav} className={`${isNavOpen ? " top-0" : " top-0"} transform transition-all w-full fixed left-0 h-screen z-50`}>
      <div className="fixed inner h-screen bg-blue-600 left-0 top-0 z-10" />
      <div className="fixed inner h-screen navbar-bg left-0 top-0 z-10" />
      <div className="wrapper flex-col h-full flex z-50 relative">
        <button type="button" className="px-24 py-6" onClick={() => setIsNavOpen(!isNavOpen)}>dff</button>
        <div className="flex mx-24 mt-16 h-full justify-between items-start">
          <div className="">
            <ul className="nav-links">
              {
                navLinks.map((link) => (
                  <li
                    key={link.title}
                    className="nav-link"
                  >
                    <NavLink
                      to={link.link}
                      state={link.state}
                      className={({ isActive }) => `${isActive ? "border-red-900" : "border-transparent"} transition-all font-bold text-6xl uppercase tracking-tight leading-tight border-l-8 px-2`}
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
  isNavOpen: PropTypes.bool,
  setIsNavOpen: PropTypes.func,
};

NavBar.defaultProps = {
  isNavOpen: false,
  setIsNavOpen: () => { },
};

export default NavBar;
