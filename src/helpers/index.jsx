/* eslint-disable import/prefer-default-export */
import parse from "html-react-parser";

export const getImg = (res) => res?.data?.attributes?.url;

export const parseHtml = (html) => parse(`${html}`);

export const getYtID = (url) => url?.match(/([a-z0-9_-]{11})/gim)[0];
