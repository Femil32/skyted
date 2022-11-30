import PropTypes from 'prop-types';
import React from 'react';
import { ShareArrow } from './AllSvgs';

function Header({ isNavOpen, setIsNavOpen }) {
  // const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-40">
      <div className="px-24 py-6 flex justify-between items-center w-full ">
        <div className="flex-1 text-left">
          <div className="inline-block relative">
            <button type="button" className="flex flex-col gap-2 cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>
              <span className={`relative inline-block h-[2px] w-5 bg-white transition-all ${isNavOpen && 'rotate-45 top-1'}`} />
              <span className={`relative inline-block h-[2px] w-5 bg-white transition-all ${isNavOpen && '-rotate-45 bottom-1'}`} />
            </button>
          </div>
        </div>
        <div className="flex-1 text-center">Logo</div>
        <div className="flex-1 text-right">
          <button type="button" className="btn-white group shadow-sm shadow-white">
            <span className="inline-block mr-2">Let’s Connect</span>
            <ShareArrow width={12} />
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isNavOpen: PropTypes.bool,
  setIsNavOpen: PropTypes.func,
};

Header.defaultProps = {
  isNavOpen: false,
  setIsNavOpen: () => { },
};

export default Header;
