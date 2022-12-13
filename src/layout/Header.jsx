import PropTypes from "prop-types";
import React from "react";
import LogoIMG from "../assets/imgs/logo.png";
import { CtaBtn } from "../components/Micro";

function Header({ setIsNavOpen }) {
  // const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar fixed top-0 z-40 px-24 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button type="button" className="px-4 cursor-pointer" onClick={() => setIsNavOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </button>
        </div>
      </div>
      <div className=" absolute left-1/2 -translate-x-1/2">
        <div className="object-cover w-16">
          <img src={LogoIMG} alt="skyted" className="w-full h-full" />
        </div>
      </div>
      <div className="navbar-end">
        <CtaBtn text="Let’s Connect" />
      </div>
    </div>
  );
}

Header.propTypes = {
  setIsNavOpen: PropTypes.func,
};

Header.defaultProps = {
  setIsNavOpen: () => { },
};

export default Header;
