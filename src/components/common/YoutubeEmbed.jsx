import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, className }) => (
  <div className={`${className} overflow-hidden relative`}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="w-full h-full"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

YoutubeEmbed.defaultProps = {
  className: "",
};

export default YoutubeEmbed;
