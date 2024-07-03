import React from "react";
import Homecard from "./Homecard";
import News from "./News";

import TextCounter from "./TextCounter";
import Eventcard from "./Eventcard";
function Body() {
  return (
    <>
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
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-sm-4" id="pe">
              <Homecard
                src="https://htmlbeans.com/html/egovt/images/img04.jpg"
                p="Service Departments "
                p2="Learn More"
              />
            </div>
            <div className="col-sm-4" id="pe">
              {" "}
              <Homecard
                src="https://htmlbeans.com/html/egovt/images/img05.jpg"
                p="City Visitors Guide  "
                p2="Learn More"
              />
            </div>
            <div className="col-sm-4" id="pe">
              {" "}
              <Homecard
                src="https://htmlbeans.com/html/egovt/images/img06.jpg"
                p="
Administrations  "
                p2="Learn More"
              />
            </div>
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
              "Stand at the top of a cliff and jump off and build your wings on
              the way down." <br />
              Carnee Simmons, Mayor
            </p>
            <p>
              <img
                src="https://img.icons8.com/?size=100&id=25603&format=png&color=000000"
                alt=""
              />
              Video Intro About Our Municipal
            </p>
          </div>
          <div className="col -sm-6">
            <div className="row">
              <div className="col-sm-6" id="pic6">
                <img
                  src="https://htmlbeans.com/html/egovt/images/img07.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-6" id="pic7">
                <img
                  src="https://htmlbeans.com/html/egovt/images/img08.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" conatiner-fluid " style={{ backgroundColor: "#202b5d" }}>
        <div className="container p-5">
          <TextCounter
            src1="https://img.icons8.com/?size=100&id=3728&format=png&color=000000"
            heading="k"
            p1="Square kilometres
region covers "
            src2="https://img.icons8.com/?size=100&id=JtdN7f4ZTV61&format=png&color=000000"
            heading="k"
            p2="Square kilometres
region covers "
            src3="https://img.icons8.com/?size=100&id=2787&format=png&color=000000"
            heading1="%"
            p3="Square kilometres
region covers "
            src4="https://img.icons8.com/?size=100&id=S1tUpEF7NX5K&format=png&color=000000"
            heading2="th"
            p4="Square kilometres
region covers "
          />
        </div>
      </div>
      <div className="container-fuild">
        <div className="row">
          <div className="col-sm-8" id="sm8">
            <div className="container">
              <div className="row d-flex justify-content-between p-2">
                <div className="col-sm-3 ">
                  <h2 className="h31">Upcoming Events </h2>
                </div>
                <div className=" col-sm-3">
                  <h2 className="h32 "> See All Events></h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4" style={{ paddingLeft: "10px" }}>
                  <Eventcard
                    title23="Entertainement"
                    heading2="Organizing City Photography Contest-2022"
                    location="Mayor Office, Texas city "
                    imgsrc="https://htmlbeans.com/html/egovt/images/img09.jpg"
                  />
                </div>
                <div
                  className="col-sm-4"
                  id="col4"
                  style={{ paddingLeft: "200px" }}
                >
                  <Eventcard
                    title23="Entertainement"
                    heading2="Cultural Festival & Concert at domanion"
                    imgsrc="https://htmlbeans.com/html/egovt/images/img10.jpg"
                    location="32,Quincy Street,Cambridge,MA"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4"
            id="pe"
            style={{ backgroundColor: "lightgray" }}
          >
            <h2
              style={{
                padding: "40px",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#232e5f",
              }}
            >
              City Documents{" "}
            </h2>
            <div className="card mx-5" style={{ width: "18rem" }}>
              <img
                src="https://img.icons8.com/?size=100&id=37930&format=png&color=000000"
                style={{
                  width: "10rem",
                  margin: "10px",
                  backgroundColor: "#ff3514",
                  padding: "22px",
                }}
                className="card-img-top rounded mx-auto d-block rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Town Board Applications October 4, 2020
                </p>
                <p className="card-text">
                  Temporary Road Permit Application September 15, 2020
                </p>
                <p className="card-text">
                  Commercial Business Permit September 8, 2020
                </p>
                <p className="card-text">
                  Housing Strategic Plan August 9, 2020
                </p>
                <a href="#" className="btn btn-primary">
                  More Documents icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <div className="container ">
          <div className="row mt-5">
            <div className="col-sm-4">
              <h2 id="newsh">News and Publications</h2>
              <p id="newsp" className="py-3">
                The news about recent activities for needed peoples
              </p>
              <a href="#" class="btn-flip">
                <div className="btn-inner">
                  <div className="btn-front">More News</div>
                  <div className="btn-back">Back</div>
                </div>
              </a>
            </div>
            <div className="col-sm-4">
              <News
                imgsrc="https://htmlbeans.com/html/egovt/images/img11.jpg"
                heading2="List of City Weekend Celebrations"
                location="In Goverment"
              />
            </div>
            <div className="col-sm-4">
              <News
                imgsrc="https://htmlbeans.com/html/egovt/images/img12.jpg"
                heading2="New Australian Economic Culture"
                location="In Culture"
              />
            </div>
            <div className="col-sm-4">
              <News
                imgsrc="https://htmlbeans.com/html/egovt/images/img13.jpg"
                heading2="Smart City Design Plan 2025"
                location="In Developement"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid " style={{backgroundColor:'#202b5d'}}>
        <div className="row  pt-5" style={{backgroundColor:'#202b5d'}}>
        <h2 id="explore">Explore Online
        Services & Resource </h2>
        <p id="explore3">
        City goverment providing a wide range of online services to people who need help. 
        </p>
        </div>
        <div className="row "id="flex">
          <div className="col-sm-4 " style={{paddingLeft:'-121px;'}}>
          <div class="card" style={{width:'25rem',left: '-131px'
}}>
  <ul class="list-group list-group-flush p-5" id="">
    <li class="list-group-item m-1" id="lihover">Parking Permission    <i class="fas" id="fas">&#xf105;</i> </li>
    <li class="list-group-item m-1"id="lihover">File a Tax Return <i class="fas" id="fas">&#xf105;</i> </li>
    <li class="list-group-item m-1" id="lihover">Order Birth Certificate <i class="fas" id="fas">&#xf105;</i> </li>
    <li class="list-group-item m-1" id="lihover">Get Building  <i class="fas" id="fas">&#xf105;</i> </li>
    <li class="list-group-item m-1" id="lihover">Apply For Driving License <i class="fas" id="fas">&#xf105;</i> </li>
    <li class="list-group-item m-1" id="lihover">Report Pollution <i class="fas" id="fas">&#xf105;</i> </li>
  </ul>
</div>
          </div>
          <div className="col-sm-4 mx-0 px-0 "  id="flex2">
          <div class="card" style={{width:'25rem'}}id="colsm">
  <ul class="list-group list-group-flush p-5" id="">
    <li class="list-group-item m-1" id="lihover1">Parking Permission<i class='fas fa-long-arrow-alt-right' id="fas"></i> </li>
    <li class="list-group-item m-1"id="lihover1">File a Tax <i class='fas fa-long-arrow-alt-right' id="fas"></i></li>
    <li class="list-group-item m-1" id="lihover1">Order Birth Certificate<i class='fas fa-long-arrow-alt-right' id="fas"></i></li>
    <li class="list-group-item m-1" id="lihover1">Get Building Permission<i class='fas fa-long-arrow-alt-right' id="fas"></i></li>
    <li class="list-group-item m-1" id="lihover1">Apply For Driving License<i class='fas fa-long-arrow-alt-right' id="fas"></i></li>
    <li class="list-group-item m-1" id="lihover1">Report Pollution<i class='fas fa-long-arrow-alt-right' id="fas"></i></li>
  </ul>
</div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Body;
