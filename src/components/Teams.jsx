import React from "react";

function Teams() {
  return (
    <div className=" position-relative container teams"id="team">
      <h3 className="col-6 text-center bay-head-text   teams-header underlinehead">Dream Team</h3>

      <div className="teams-card-container position-relative ">
        <div className=" d-block d-lg-flex gap-5 justify-content-center  teams-top-card-wrapper  text-white">
          <div className="team-card col-9 col-md-7 col-lg-3 mx-auto m-lg-0 m-lg-0  position-relative">
            <div className="team-card-logo">
              <img
                src="/images/team1.png"
                alt="slide"
                width="100%"
                height="100%"
              />
            </div>
            

            <div className="team-card-body ">
                <h4 className=" mt-5">THE DREAMER</h4>
                {/* <h5>Lorem Ipsum</h5> */}
                <p>
                A python developer by skill, fell in love with Python because of its open-source community and this was the springboard for falling in love with the NFT space.
                </p>
              </div>
          </div>
          <div className="team-card col-9 col-md-7 col-lg-3 mx-auto m-lg-0 m-lg-0  position-relative">
            <div className="team-card-logo">
              <img
                src="/images/team3.png"
                alt="slide"
                width="100%"
                height="100%"
              />
            </div>
            

            <div className="team-card-body">
                <h4>THE CONTENT CREATOR/PROJECT MANAGER</h4>
                {/* <h5>Lorem Ipsum</h5> */}
                <p>
                  A typical favourite person on every team with over 4 years of experience in content creation and project management for reputable brands like HultPrize.
                </p>
              </div>
          </div>
          <div className="team-card col-9 col-md-7 col-lg-3 mx-auto m-lg-0 m-lg-0  position-relative">
            <div className="team-card-logo">
              <img
                src="/images/team2.png"
                alt="slide"
                width="100%"
                height="100%"
              />
            </div>
            

            <div className="team-card-body">
                <h4>THE ARTIST</h4>
                {/* <h5>Lorem Ipsum</h5> */}
                <p>
                An open-minded 3-D artist with proficiencies in softwares like Zbrush, Blender, Marmoset tool bag etc
                </p>
              </div>
          </div>
        </div>
        <div className="d-block d-lg-flex gap-5  justify-content-center  text-white">
          <div className="team-card col-9 col-md-7 col-lg-3  mx-auto m-lg-0 m-lg-0  position-relative">
            <div className="team-card-logo">
              <img
                src="/images/team4.png"
                alt="slide"
                width="100%"
                height="100%"
              />
            </div>
            

            <div className="team-card-body ">
                <h4 className=" mt-5">THE DEVELOPER </h4>
                {/* <h5>Lorem Ipsum</h5> */}
                <p>
               A web3 developer with proficiencies in Javascript, Typescript,  Solidity, React and NodeJs and 3 years experience in developing secure smart contracts on any EVM compatible protocol.
                </p>
              </div>
          </div>
          <div className="team-card col-9 col-md-7 col-lg-3 mx-auto m-lg-0 m-lg-0 position-relative">
            <div className="team-card-logo">
              <img
                src="/images/team5.png"
                alt="slide"
                width="100%"
                height="100%"
              />
            </div>
            

            <div className="team-card-body">
                <h4>THE SOCIAL / COMMUNITY MANAGER</h4>
                {/* <h5>Lorem Ipsum</h5> */}
                <p>
               Passionate about meaningful and effective communication with good listening and speaking skills.


                </p>
              </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Teams;
