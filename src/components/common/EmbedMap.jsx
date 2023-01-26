import React from "react";

function EmbedMap({ address, height, width }) {
  return (
    <div>

      <div className={`mapouter relative text-right h-[${height}px] ${width ? `w-[${width}]` : "w-screen"}`}>
        <div className="gmap_canvas">
          <iframe
            title="uniq"
            width="1080"
            height="450"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            className={`overflow-hidden bg-none h-[${height}px] ${width ? `w-[${width}]` : "w-screen"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default EmbedMap;
