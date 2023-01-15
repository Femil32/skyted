import React from "react";
import { LoadingSvg } from "../AllSvgs";

function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoadingSvg width={200} />
    </div>
  );
}

export default Loader;
