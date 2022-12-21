import React from "react";
import PropTypes from "prop-types";
import { CustomIMG, PageHeader } from "../Micro";

function ImgData({
  src, alt, title, description, dataClasses, imgClasses,
}) {
  return (
    <div className="flex md:flex-nowrap flex-wrap justify-center md:gap-12 gap-8 items-center">
      <div className={`${dataClasses} md:w-1/2`}>
        <PageHeader title={title} />
        <p className="max-w-lg xl:mt-12 lg:mt-8 mt-2 xl:text-xl sm:text-base text-sm text-gray-500">{description}</p>
      </div>
      <div className={`${imgClasses} md:w-1/2`}>
        <CustomIMG src={src} alt={alt} className="rounded-3xl img-offset-border before:rounded-[60px] overflow-visible" ImgClassName="rounded-[50px] overflow-hidden z-10 relative" />
      </div>
    </div>
  );
}

ImgData.propTypes = {
  src: PropTypes.element.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dataClasses: PropTypes.string,
  imgClasses: PropTypes.string,
};

ImgData.defaultProps = {
  dataClasses: "",
  imgClasses: "",
};

export default ImgData;
