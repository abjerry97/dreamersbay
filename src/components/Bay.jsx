import React from "react";

function Bay() {
  return (
    <div className="mt-5 mb-5 " id="bay">
      <div className=" d-flex justify-content-center mt-5 ">
        <h3 className="col-6 text-center bay-head-text my-5 mb-5 ">
          {/* Welcome to The Bay! The only place you get a Canvas to paint your
          future. */}
          Welcome to The Bay
        </h3>
      </div>

      <div className="  overflow-hidden">
        <div className=" bay-card-container position-relative d-flex">
          <div className="d-flex gap-3 bay-card-wrapper ">
            <div className="   bay-image-wrapper1 p-0 ">
              <div className="bay-image-container p-3">
                <img
                  src="/images/slide3.png"
                  alt="slide"
                  width="100%"
                  height="100%"
                  className="bayImg"
                />
              </div>
            </div>{" "}
            <div className="   bay-image-wrapper p-0">
              <div className="bay-image-container p-3">
                <img
                  src="/images/slide1.png"
                  alt="slide"
                  width="100%"
                  height="100%"
                  className="bayImg"
                />
              </div>
            </div>{" "}
            <div className="   bay-image-wrapper1 p-0">
              <div className="bay-image-container p-3">
                <img
                  src="/images/slide2.png"
                  alt="slide"
                  width="100%"
                  height="100%"
                  className="bayImg"
                />
              </div>
            </div>{" "}
            {/* <div className="   bay-image-wrapper1 p-0">
            <div className="bay-image-container p-3">
          <img src="/images/slide3.png" alt="slide"  width="100%" height="100%" />
          </div>
        </div>{" "} */}
          </div>
          <div className="d-flex gap-3 bay-card-wrapper wrapper1">
            <div className="   bay-image-wrapper p-0 ">
              <div className="bay-image-container p-3">
                <img
                  src="/images/slide3.png"
                  alt="slide"
                  width="100%"
                  height="100%"
                  className="bayImg"
                />
              </div>
            </div>{" "}
            <div className="   bay-image-wrapper1 p-0">
              <div className="bay-image-container p-3">
                <img
                  src="/images/slide1.png"
                  alt="slide"
                  width="100%"
                  height="100%"
                  className="bayImg"
                />
              </div>
            </div>{" "}
            <div className="   bay-image-wrapper p-0">
              <div className="bay-image-container p-3">
                <img
                  src="/images/slide2.png"
                  alt="slide"
                  width="100%"
                  height="100%"
                  className="bayImg"
                />
              </div>
            </div>{" "}
            {/* <div className="   bay-image-wrapper1 p-0">
            <div className="bay-image-container p-3">
          <img src="/images/slide3.png" alt="slide"  width="100%" height="100%" />
          </div>
        </div>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bay;
