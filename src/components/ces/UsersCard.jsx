import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CustomIMG, PageHeader } from "../Micro";

function UsersCard({
  header, src, alt, title, description, link, linkText, className,
}) {
  return (
    <div className={`${className} w-full`}>
      <PageHeader data-aos="fade-in" title={header} className="text-center mb-12" />
      <CustomIMG data-aos="fade-in" src={src} alt={alt} className="object-cover w-full h-[500px] rounded-2xl overflow-hidden" />
      <div className="flex flex-col gap-2 mt-4">
        <h5 data-aos="fade-in" className="text-twitter">{title}</h5>
        <p data-aos="fade-in" className="text-sm">{description}</p>
        <Link data-aos="fade-in" to={link} className="mt-4">
          Why now?
          {" "}
          <span className="opacity-40 text-sm">{linkText}</span>
        </Link>
      </div>
    </div>
  );
}

export default UsersCard;

UsersCard.propTypes = {
  header: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

UsersCard.defaultProps = {
  className: "",
};
