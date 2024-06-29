import React from "react";
import Homecard from "./Homecard";

function Body() {
  return (
    <div>
      <div className="container-fluid" id="body">
        <div className="container" id="body1">
          <div className="row">
            <div className="card-group mt-1">
              <div className="card">
                <img
                  src="https://img.icons8.com/?size=100&id=3496&format=png&color=000000"
                  className="card-img-top"
                  alt="..."
                  id="img"
                />
                <div className="card-body">
                  <h5 className="card-title">Your Government</h5>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://img.icons8.com/?size=100&id=21817&format=png&color=000000"
                  alt=""
                  id="img"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jobs and <br />
                    Unemployment
                  </h5>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://img.icons8.com/?size=100&id=EhK5kQGo9qdp&format=png&color=000000"
                  className="card-img-top"
                  alt="..."
                  id="img"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Business and <br />
                    Industry
                  </h5>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://img.icons8.com/?size=100&id=241&format=png&color=000000"
                  className="card-img-top"
                  alt="..."
                  id="img"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Roads and <br />
                    Transport
                  </h5>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://img.icons8.com/?size=100&id=2787&format=png&color=000000"
                  className="card-img-top"
                  alt="..."
                  id="img"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Culture and <br />
                    Recreation
                  </h5>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://img.icons8.com/?size=100&id=2112&format=png&color=000000"
                  className="card-img-top"
                  alt="..."
                  id="img"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Justice, Safty and <br />
                    the law
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p id="p">
            The official guide to living, working, visiting and investing in the
            Texas
            <div className="btn btn-primary" id="btn">
              Let’s explore more
            </div>
          </p>
        </div>
      </div>
      <div className="container bg-light-dark">
        <div className="row">
          <div className="col-xl-6" id="xl">
            <h2 id="h2">
              Let’s explore local services, programs & initiatives.{" "}
            </h2>
          </div>
          <div className="col-xl-6  justify-content-end" id="xl6">
            <div className="btn btn-primary " id="btn2">
              Explore Services
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-sm-4">
            {" "}
            <Homecard
              src="https://htmlbeans.com/html/egovt/images/img04.jpg"
              p="Service Departments "
              p2="Learn More"
            />
          </div>
          <div className="col-sm-4">
            {" "}
            <Homecard
              src="https://htmlbeans.com/html/egovt/images/img05.jpg"
              p="City Visitors Guide  "
              p2="Learn More"
            />
          </div>
          <div className="col-sm-4">
            {" "}
            <Homecard
              src="https://htmlbeans.com/html/egovt/images/img06.jpg"
              p="
Administrations  "
              p2="Learn More"
            />
          </div>
        </div>
        <div className="row">
          <div className="col -sm-6">
            <h2 id="heading">Meet Ideological leader for youth generation </h2>
            <br />
            <p id="para2">
              {" "}
              Mayor Carnee Simmons is committed to solving problems for town
              people across the state under her leadership. Expanding access to
              affordable healthcare, improving skills, respecting working
              families as the City’s 45th mayor. Mayor Carnee was won in the
              serve a sixth term on Octorber 7, 2018.{" "}
            </p>
            <p id="para">
    "Stand at the top of a cliff and jump off and build your wings on the way down." <br />
    Carnee Simmons, Mayor
            </p>
            <p><img src="https://img.icons8.com/?size=100&id=25603&format=png&color=000000" alt="" />
Video Intro About Our Municipal
</p>
          </div>
          <div className="col -sm-6">
            <div className="row">
            <div className="col-sm-6" id="pic6">
                <img src="https://htmlbeans.com/html/egovt/images/img07.jpg" alt="" />
              </div>
              <div className="col-sm-6" id="pic7">
                <img src="https://htmlbeans.com/html/egovt/images/img08.jpg" alt="" />
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
