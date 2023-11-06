import React from "react";
import Goals from "./Goals";
import Navbar from "./NavBar";
import SearchBox from "./SearchBox";

function Introduction() {
  return (
    <div className="intro-bg">
      {/* <Navbar/> */}

      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-7 d-flex align-items-center ">
            <div className="">
              <div className="intro-head ">
                What are we called? <span className="wine-txt">Dreamers</span> 
                <br /> Where do we reside?{" "}
                <span className="wine-txt">The Bay</span>
              </div>
              <p className="intro-body mt-3">
                Authentic and truly unique digital creation.
                <br />
                Signed and issued by the creator, made possible by blockchain
                technology
              </p>

              <div className="d-flex gap-5 mt-3  justify-content-around justify-content-lg-start  ">
                <div className="nav-btn ">Get Started</div>
                {/* <div className="nav-btn ">Buy NFT</div> */}
              </div>
            </div>
          </div>

          <div className="  d-block col-12 col-lg-5 overflow-hidden">
            <img src="/images/hero.png" alt="" className="introImg" />
          </div>
        </div>
      </div>
      {/* <SearchBox/> */}

      <div className="line-bg"></div>
      <Goals />
    </div>
  );
}

export default Introduction;
