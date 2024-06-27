import React from "react";

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
      </div>
    </div>
  );
}

export default Body;
