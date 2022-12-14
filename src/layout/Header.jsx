import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CtaBtn, SkytedLogo } from "../components/Micro";
import NavBar from "./NavBar";

function Header() {
  const location = useLocation;

  const [navState, setNavState] = useState({
    initial: false,
    isClicked: null,
  });

  const [isDisabled, setIsDisabled] = useState(false);

  // useEffect(() => {
  //   setNavState({
  //     isClicked: false,
  //   });
  // }, [location]);

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

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }
      if (currentScrollPos !== 0) {
        document.getElementById("navbar").classList.add("showNav");
      } else if (currentScrollPos === 0) {
        document.getElementById("navbar").classList.remove("showNav");
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div id="navbar" className="navbar bg-light-gray border-0 outline-0 transition-all duration-700 fixed top-0 z-40 px-24 py-4 hidden md:flex">
      <div className="navbar-start">
        <div className="dropdown">
          <button type="button" className={`${navState.isClicked ? "text-white z-[99]" : "text-black"} relative cursor-pointer h-6`} disabled={isDisabled} onClick={handleNav}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
            <span className={`${navState.isClicked ? "rotate-45 mb-0" : "mb-1"} relative bg-current w-5 h-[3px] block`} />
            <span className={`${navState.isClicked && "-rotate-45"} relative bg-current w-5 h-[3px] block`} />
          </button>
        </div>
      </div>
      <div className=" absolute left-1/2 -translate-x-1/2">
        <SkytedLogo />
      </div>
      <div className="navbar-end">
        <CtaBtn text="Let???s Connect" className="bg-black text-white" />
      </div>
      <NavBar navState={navState} handleNav={handleNav} />
    </div>
  );
}

export default Header;
