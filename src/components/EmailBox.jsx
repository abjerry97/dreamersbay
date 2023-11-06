import React from "react";

function EmailBox() {
  return (
    <div className="row" id="community">
      <h3 className="col-10 col-md-8 col-lg-6 m-auto text-center bay-head-text my-2 mb-5">
       Join The Community
      </h3>
      <div className="d-flex w-100 justify-content-around mb-5">
        <div className=" search-box d-flex gap-5 p-3 col-10 col-lg-6">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className=" border-0 bg-transparent w-100"
          />

          <div className="subscribe-btn shadow">Join</div>
        </div>
      </div>
    </div>
  );
}

export default EmailBox;
