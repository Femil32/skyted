/* eslint-disable no-unsafe-optional-chaining */
import React, {
  useCallback, useEffect, useRef, useState,
} from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { CtaBtn, SkytedLogo } from "../components/Micro";
import NavBar from "./NavBar";

function Header({ scrollbar }) {
  const location = useLocation();
  const navbar = useRef();
  const prevpos = useRef(0);

  const [navState, setNavState] = useState({
    initial: false,
    isClicked: null,
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [isBlackHeader, setIsBlackHeader] = useState(false);

  const disableNav = () => {
    setIsDisabled(!isDisabled);
    setTimeout(() => {
      setIsDisabled(false);
    }, 1200);
  };

  const handleNav = (isClose = false) => {
    disableNav();
    if (isClose) {
      setNavState({
        isClicked: false,
      });
    }
    if (navState.initial === false) {
      setNavState({
        initial: null,
        isClicked: true,
      });
    } else if (navState.isClicked === true) {
      setNavState({
        isClicked: !navState.isClicked,
      });
    } else if (navState.isClicked === false) {
      setNavState({
        isClicked: !navState.isClicked,
      });
    }
  };

  const handleHeader = useCallback(
    () => {
      const { y } = scrollbar?.offset;
      let prevScrollpos = prevpos.current;
      const currentScrollPos = y;
      if (prevScrollpos > currentScrollPos) {
        navbar.current.style.top = "0";
        prevpos.current = y;
      } else {
        navbar.current.style.top = "-88px";
        prevpos.current = y;
      }
      if (currentScrollPos !== 0) {
        navbar.current.classList.add(isBlackHeader ? "showNavWhite" : "showNavBlack");
      }
      if (currentScrollPos === 0) {
        navbar.current.classList.remove("showNavWhite");
        navbar.current.classList.remove("showNavBlack");
      }
      prevScrollpos = currentScrollPos;
    },
    [isBlackHeader, scrollbar?.offset],
  );

  useEffect(() => {
    scrollbar?.addListener(handleHeader);
    // window.addEventListener("scroll", handleHeader);
    // window.addEventListener("scroll", (handleHeader));
    return () => scrollbar?.removeListener(handleHeader);
  }, [handleHeader, scrollbar]);

  useEffect(() => {
    const { pathname } = location;
    if (pathname.length > 1) setIsBlackHeader(true);
    else setIsBlackHeader(false);
  }, [location]);

  return (
    <div id="navbar" ref={navbar} className="navbar border-0 outline-0 transition-all duration-700 fixed top-0 left-0 w-full z-40 lg:px-24 px-6 justify-between py-6">
      <div className="section-container p-0 max-md:justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <button type="button" className={`${navState.isClicked ? "text-white z-[99]" : "text-black"} ${isBlackHeader ? "text-black" : "text-white"} relative cursor-pointer h-6`} disabled={isDisabled} onClick={handleNav}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
              <span className={`${navState.isClicked ? "rotate-45 mb-0" : "mb-1"} relative bg-current w-5 h-[3px] block`} />
              <span className={`${navState.isClicked && "-rotate-45"} relative bg-current w-5 h-[3px] block`} />
            </button>
          </div>
        </div>
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2">
          <SkytedLogo isRed isHome={location.pathname.length === 1} className="w-20" />
        </div>
        <div className="hidden md:inline-flex navbar-end ">
          <CtaBtn text="Let’s Connect" className={`${isBlackHeader ? "text-white bg-black" : "text-black bg-white"} xl:text-base text-sm`} />
        </div>
        <NavBar navState={navState} handleNav={handleNav} />
      </div>
    </div>
  );
}

Header.propTypes = {
  scrollbar: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Header;
