import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import PropTypes from "prop-types";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

const options = {
  alwaysShowTracks: true,
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = ({ setScrollbar }) => {
  const location = useLocation();

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const myScrollbar = Scrollbar.init(document.querySelector("#scrollbar"), options);
    setScrollbar(myScrollbar);

    [].forEach.call(document.querySelectorAll("[data-aos]"), (el) => {
      myScrollbar.addListener(() => {
        if (myScrollbar.isVisible(el)) {
          el.classList.add("aos-animate");
        }
      });
    });

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.querySelector("#scrollbar"));
    };
  }, [location, setScrollbar]);

  return null;
};

Scroll.propTypes = {
  setScrollbar: PropTypes.func.isRequired,
};

export default Scroll;
