import React from "react";

function Slidr() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src=" https://htmlbeans.com/html/egovt/images/img02.jpg  "
              className="d-block w-100"
              alt="..."
            />
            <div
              className=" carousel-caption d-none d-md-block"
              id="#container"
            >
              <h5>Fastest Growing City in the Europ</h5>
              <p>
                {" "}
                It’s Called as Electronic city because this is best city in
                europe to start new industrial and technology related business.
              </p>
              <button type="button" class="btn btn-lg ">
                Discover More
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://htmlbeans.com/html/egovt/images/img01.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div
              className=" carousel-caption d-none d-md-block"
              id="#container"
            >
              <h5>Welcome to the Local Goverment Portal</h5>
              <p>
                The Most Exciting guide to living, working, visiting and
                investing business.
              </p>
              <button type="button" class="btn btn-lg ">
                Discover More
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://htmlbeans.com/html/egovt/images/img03.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div
              className=" carousel-caption d-none d-md-block"
              id="#container"
            >
              <h5>Lovely &amp; Romatic City for Natural Lovers</h5>
              <p>
                Every year 2 million people from worldwide don’t forget to visit
                here.
              </p>
              <button type="button" class="btn btn-lg ">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slidr;
