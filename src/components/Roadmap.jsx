import React, { useState } from "react";
import { roadmap } from "../static/roadmap";
import Access from "./Access";
import RoadmapDropdown from "./RoadmapDropdown/RoadmapDropdown";
import SlideshowImage from "./SlideshowImage/SlideshowImage";

function Roadmap() {
  const [index, setIndex] = React.useState(0);
  const allProps = {index, setIndex}
  return (
    <div className=" position-relative container " id="dreammap">
      
    <h3 className="text-center manifesto-header pt-5 my-5 underlinehead">Living the Dream</h3>
      <div className="row p-2 justify-content-around justify-content-lg-between">
        <div className="col-10 col-lg-6  p-0 shadow">
          {" "}
          {/* <div className="roadmap-hero">
          <img
            src="/images/slide3.png"
            alt="slide"
            width="100%"
            height="100%"
          />
          </div> */}
          <SlideshowImage  {...allProps} />
        </div>
        <div className="col-12 col-lg-6 p-3  ps-md-5 ">
          <div className="roadmap-list-wrapper py-4 py-lg-0">
            {roadmap.map((item, index) => {
              return <RoadmapDropdown  key={index} item={item}  {...allProps} />;
            })}
          </div>
        </div>
      </div>
      <div className="roadmap-bg position-absolute"></div>

      {/* <Access /> */}
    </div>
  );
}

export default Roadmap;
