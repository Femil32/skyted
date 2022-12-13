/* eslint-disable import/prefer-default-export */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RoundedMinus, RoundedPlus, ShareArrow } from "./AllSvgs";

// PageHeader
export const PageHeader = ({ title, className }) => (
  <h2 className={`text-5xl font-semibold mb-8 ${className}`}>
    {title}
  </h2>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
PageHeader.defaultProps = {
  title: "",
  className: "",
};

// SlatePara
export const SlatePara = ({ text, className }) => (
  <p className={`text-[#001432]/50 font-semibold ${className}`}>
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
export const CtaBtn = ({ text, className }) => (
  <button type="button" className={`btn-white group shadow-sm  ${className}`}>
    <span className="inline-block mr-2">{text}</span>
    <ShareArrow width={12} />
  </button>
);

CtaBtn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
CtaBtn.defaultProps = {
  text: "Button",
  className: "shdow-white",
};

// IconCard
export const IconCard = ({
  icon, title, description, link, linkText, className, btnClassName,
}) => (
  <div className={`p-2 ${className}`}>
    <div className="flex justify-center items-start flex-col gap-5">
      <div>{icon}</div>
      <h6 className="text-lg font-semibold">{title}</h6>
      <SlatePara text={description} />
      <Link to={link}>
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
  type, placeholder, className, title,
}) => <input type={type} title={title} placeholder={placeholder} className={`px-5 py-3 bg-white border-none outline-none rounded-lg ${className}`} />;

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};
Input.defaultProps = {
  type: "text",
  className: "",
  placeholder: "Enter here",
  title: "",
};

// custom textarea
export const TextArea = ({
  placeholder, className, name, cols, rows,
}) => <textarea name={name} placeholder={placeholder} className={`px-5 py-3 bg-white w-full rounded-lg ${className}`} cols={cols} rows={rows} />;

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
  cols: "",
  rows: "",
};

export const Detail = ({ summary, detail }) => (
  <details className="cursor-pointer group">
    <summary className="flex justify-between items-center font-medium text-lg">
      <span>{summary}</span>
      <div className="group-open:hidden">
        <RoundedPlus width="20" />
      </div>
      <div className="hidden group-open:block">
        <RoundedMinus width="20" />
      </div>
    </summary>
    <p className="opacity-40 mt-2 text-base font-medium">{detail}</p>
  </details>
);

Detail.propTypes = {
  summary: PropTypes.string,
  detail: PropTypes.string,
};

Detail.defaultProps = {
  summary: "",
  detail: "",
};