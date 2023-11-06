import React, { useState } from "react";
import PropTypes from "prop-types";

const RoadmapDropdown = (props) => { 
  const { setIndex, item } = props;
  const { id, content, title } = item;
  const [dropdown, setdropdown] = useState(true);
//  console.log (document.getElementById("content")?.innerHTML)
  return (
    <div
      className={`roadmap-list py-5 ${!!dropdown ? "active" : ""} `}
      onClick={() => {
        setdropdown(!dropdown);
        dropdown && setIndex((id - 1)> 0 ? id-1: 0  )
        
      }}
    >
      <div className="d-flex justify-content-between">
        <span className=""> {title}</span>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28873 3.80794H4.26473V0.585938H3.09473V3.80794H0.0527344V4.94194H3.09473V8.14594H4.26473V4.94194H7.28873V3.80794Z"
            fill="white"
          ></path>
        </svg>
      </div> <p className={`mt-4 p-0`} id="content">{content}</p> 
    </div>
  );
};

export default RoadmapDropdown;
