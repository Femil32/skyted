import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  menuShow,
  menuHide,
  staggerLinks,
  textIntro,
  hoverLink,
  hoverExit,
} from "../components/animation/Animate";

const Menu = ({ state }) => {
  // create refs for our DOM elements

  const menuWrapper = useRef(null);
  const show1 = useRef(null);
  const show2 = useRef(null);
  const info = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      menuHide(show2, show1);
      // Set menu to display none
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true
      || (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      // Allow menu to have height of 100%
      gsap.to([show1, show2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      menuShow(show1, show2);
      textIntro(info);
      staggerLinks(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => ({ menuWrapper: el })} className="hamburger-menu">
      <div
        ref={(el) => ({ show1: el })}
        className="menu-secondary-background-color"
      />
      <div ref={show2} className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={line1}
                      to="/about-us"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={line2}
                      to="/gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverLink(e)}
                      ref={line3}
                      to="/contact-us"
                    >
                      Contact us
                    </Link>
                  </li>

                </ul>
              </nav>
              <div ref={info} className="info">
                <h3>Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  ipsam nesciunt dolores,
                  similique minus perspiciatis non repudiandae
                  dolore nulla eos dicta, libero molestias eaque omnis excepturi!
                  Est corporis earum fuga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
