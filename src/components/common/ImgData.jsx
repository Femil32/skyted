import PropTypes from "prop-types";
import React from "react";
import { CustomIMG, PageHeader } from "../Micro";

function ImgData({
  src, alt, title, description, dataClasses, imgClasses, children, ...args
}) {
  return (
    <div className="flex md:flex-nowrap flex-wrap justify-center md:gap-12 gap-8 items-center" {...args}>
      <div className={`${dataClasses} md:w-1/2`}>
        <PageHeader title={title} />
        <article className="max-w-lg xl:mt-12 lg:mt-8 mt-2 xl:text-xl sm:text-base text-sm text-gray-500">{description}</article>
        {children}
      </div>
      <div className={`${imgClasses} md:w-1/2`}>
        <CustomIMG src={src} alt={alt} className="rounded-3xl img-offset-border before:rounded-[60px] overflow-visible" ImgClassName="rounded-[50px] overflow-hidden z-10 relative" />
      </div>
    </div>
  );
}

ImgData.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  dataClasses: PropTypes.string,
  imgClasses: PropTypes.string,
  children: PropTypes.element,
};

ImgData.defaultProps = {
  dataClasses: "",
  imgClasses: "",
  children: null,
};

export default ImgData;
