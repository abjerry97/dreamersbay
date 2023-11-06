import React, { useState } from "react";

function Navbar() {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".dream-nav");
    let currentPosition = window.scrollY > 0;
    header.classList.toggle("nav-bg", currentPosition);
  });
  const [dropdown, setdropdown] = useState(false);
  return (
    <div className="dream-nav  sticky-top">
      <div className="container  py-3 ">
        <div className="row justify-content-between align-items-center">
          <div className={`col-10  col-lg-3 m-lg-auto ${dropdown ? ` col-12 d-flex justify-content-center` : ``}`}>
          {/* d-flex justify-content-center */}

          <div className="logo modified">DreamersBay</div>
          </div>

          <div className={` ${dropdown ? `d-block` : `d-none`}  d-lg-block col-12 col-lg-5 m-auto`}>
            <ul className={` mt-4 m-lg-0 list-unstyled ${dropdown ? `d-block` : `d-none`}  d-lg-flex m-0 p-0 justify-content-between nav-a`} >
              <li className=" d-flex justify-content-center "><a href="#manifesto">Manifesto</a></li>
              <li className=" d-flex justify-content-center "> <a href="#dreammap"> Living the Dream</a></li>
              <li className=" d-flex justify-content-center "><a href="#team">Team</a></li>
              <li className=" d-flex justify-content-center "><a href="#faq">FAQs</a></li>
              <li className=" d-flex justify-content-center "><a href="#community">Community</a></li>
              
            <div className="nav-btn w-100 d-flex d-lg-none justify-content-center mt-4">Enter The Bay</div>

            </ul>
          </div>

          <div className="d-none d-lg-flex col-4 d-flex align-items-center justify-content-end">
            <div className="nav-btn ">Enter The Bay</div>
          </div>
          <div className={`col-2 d-block d-lg-none ${dropdown? `col-12 d-flex justify-content-center mt-4` : `col-2`} `}> {dropdown ?<svg onClick={()=>setdropdown(false)} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>   :<svg onClick={()=>setdropdown(true)} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg> }</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
