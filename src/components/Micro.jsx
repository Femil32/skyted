/* eslint-disable import/prefer-default-export */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
// logos
import LogoBlackIMG from "../assets/imgs/logo-black.png";
import LogoWhiteIMG from "../assets/imgs/logo-white.png";
import LogoRedIMG from "../assets/imgs/red-logo.png";
import LogoRoundBlackIMG from "../assets/imgs/logo.png";
import {
  Download, RoundedMinus, RoundedPlus, ShareArrow,
} from "./AllSvgs";

// PageHeader
export const PageHeader = ({
  title, className, down, ...args
}) => (
  <h2
    className={`xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-semibold mb:mb-8 mb-4 ${className}`}
    {...args}
  >
    {title}
  </h2>
);

PageHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
};
PageHeader.defaultProps = {
  title: "",
  className: "",
};

// SlatePara
export const SlatePara = ({ text, className, ...args }) => (
  <p className={`text-[#001432]/50 font-semibold ${className}`} {...args}>
    {text}
  </p>
);

SlatePara.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
SlatePara.defaultProps = {
  text: "",
  className: "",
};

// CTA button
export const CtaBtn = ({
  type, text, className, down, ...args
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={`btn-white group shadow-sm  ${className}`}
    {...args}
  >
    <span className="inline-block mr-2">{text}</span>
    {down ? <Download width={15} /> : <ShareArrow width={12} />}
  </button>
);

CtaBtn.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};
CtaBtn.defaultProps = {
  type: "button",
  text: "Button",
  className: "shdow-white",
};

// IconCard
export const IconCard = ({
  icon,
  title,
  description,
  link,
  linkText,
  className,
  btnClassName,
  ...args
}) => (
  <div
    className={`${className} p-6 ring-1 shadow-md md:ring-0 md:shadow-none  rounded-xl flex-1`}
    {...args}
  >
    <div className="flex h-full justify-center items-start flex-col gap-5">
      <div>{icon}</div>
      <h6 className="text-lg font-semibold">{title}</h6>
      <SlatePara text={description} />
      <Link to={link} className="mt-auto">
        <CtaBtn text={linkText} className={btnClassName} />
      </Link>
    </div>
  </div>
);

IconCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  className: PropTypes.string,
  btnClassName: PropTypes.string,
};
IconCard.defaultProps = {
  icon: "",
  title: "",
  description: "",
  link: "",
  linkText: "",
  className: "",
  btnClassName: "",
};

// custom input
export const Input = ({
  type, name, placeholder, className, title, ...args
}) => (
  <input
    type={type}
    title={title}
    placeholder={placeholder}
    className={`px-5 py-3 border-none outline-none ${className}`}
    autoComplete="off"
    {...args}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};
Input.defaultProps = {
  type: "text",
  name: null,
  className: "",
  placeholder: "Enter here",
  title: "",
};

// custom textarea
export const TextArea = ({
  placeholder,
  className,
  name,
  cols,
  rows,
  ...args
}) => (
  <textarea
    name={name}
    placeholder={placeholder}
    className={`px-5 py-3 w-full outline-none ${className}`}
    cols={cols}
    rows={rows}
    {...args}
  />
);

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
};
TextArea.defaultProps = {
  className: "",
  placeholder: "Enter here",
  name: "",
  cols: 10,
  rows: 10,
};

export const Detail = ({
  summary,
  detail,
  detailClassname,
  className,
  ...args
}) => (
  <details className={`${className} cursor-pointer group`} {...args}>
    <summary className="flex justify-between items-center font-medium text-lg md:text-2xl">
      <span>{summary}</span>
      <div className="group-open:hidden">
        <RoundedPlus width="20" />
      </div>
      <div className="hidden group-open:block">
        <RoundedMinus width="20" />
      </div>
    </summary>
    <p
      className={`${detailClassname} opacity-40 mt-4 text-base font-medium mr-4`}
    >
      {detail}
    </p>
  </details>
);

Detail.propTypes = {
  summary: PropTypes.string,
  detail: PropTypes.string,
  className: PropTypes.string,
  detailClassname: PropTypes.string,
};

Detail.defaultProps = {
  summary: "",
  detail: "",
  className: "",
  detailClassname: "max-w-md",
};

export const SkytedLogo = ({
  className, isBlack, isRed, isHome, ...args
}) => (
  <div className={`${className} object-contain ${isRed ? "w-14" : "md:w-32 w-18"} relative`} {...args}>
    <img
      src={LogoRedIMG}
      // src={isBlack ? LogoBlackIMG : (isRed ? (isHome ? LogoRoundBlackIMG : LogoRedIMG) : LogoWhiteIMG)}
      alt="skyted"
      className="w-full h-full"
    />
  </div>
);

SkytedLogo.propTypes = {
  className: PropTypes.string,
  isBlack: PropTypes.bool,
  isRed: PropTypes.bool,
  isHome: PropTypes.bool,
};

SkytedLogo.defaultProps = {
  className: "",
  isBlack: false,
  isRed: false,
  isHome: false,
};

export const CustomIMG = ({
  src, alt, className, ImgClassName, ...args
}) => (
  <div className={`${className} overflow-hidden`} {...args}>
    <img src={src} alt={alt} className={`${ImgClassName} w-full h-full`} />
  </div>
);

CustomIMG.propTypes = {
  src: PropTypes.element.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  ImgClassName: PropTypes.string,
};
CustomIMG.defaultProps = {
  className: "object-cover w-full",
  ImgClassName: "",
};
