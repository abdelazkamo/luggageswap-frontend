import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./index.css";
import FlightCard from "../flightCard";

const Landing = () => {
  const [locationQuery, setLocationQuery] = useState("");
  const [duration, setDuration] = useState("anytime");

  const handelClick = () => {};

  return (
    <div className="wrapper">
      <MDBContainer className="job-grid">
        <MDBCard
          className="bg-white my-5 mx-auto"
          style={{ borderRadius: "1rem", maxWidth: "100%", height: "170px" }}
        >
          <MDBCardBody className="p-5 w-100 d-flex flex-column">
            <form className="search-form">
              <div className="searchBar">
                <MDBRow className="d-flex justify-content-center align-items-center">
                  <MDBCol sm="12" md="6" lg="4" xl="4">
                    <select
                      className="form-select"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                    >
                      <option value="">Origin</option>
                      <option value="New York">New York</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="San Francisco">San Francisco</option>
                    </select>
                  </MDBCol>
                  <MDBCol sm="12" md="6" lg="4" xl="4">
                    <select
                      className="form-select"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                    >
                      <option value="">Destination</option>
                      <option value="New York">New York</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="San Francisco">San Francisco</option>
                    </select>
                  </MDBCol>
                  <MDBCol sm="12" md="6" lg="4" xl="4" className="btn-col">
                    <MDBBtn color="dark" size="lg" type="submit">
                      Filter
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center align-items-center">
                  <MDBCol sm="12" md="6" lg="6" xl="8">
                    <div className="duration-filter">
                      <span>
                        <strong>Posted Date: </strong>
                      </span>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="durationFilter"
                          id="durationAnytime"
                          value="anytime"
                          checked={duration === "anytime"}
                          onChange={(e) => setDuration(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="durationAnytime"
                        >
                          Anytime
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="durationFilter"
                          id="durationLast24Hours"
                          value="last24hours"
                          checked={duration === "last24hours"}
                          onChange={(e) => setDuration(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="durationLast24Hours"
                        >
                          Last 24 hours
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="durationFilter"
                          id="durationLastWeek"
                          value="lastweek"
                          checked={duration === "lastweek"}
                          onChange={(e) => setDuration(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="durationLastWeek"
                        >
                          Last 07 days
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="durationFilter"
                          id="durationLastMonth"
                          value="lastmonth"
                          checked={duration === "lastmonth"}
                          onChange={(e) => setDuration(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="durationLastMonth"
                        >
                          Last 30 days
                        </label>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
        <MDBRow className="job-card-row" style={{ maxWidth: "100%" }}>
          <FlightCard
            userName="Hicham Kamo"
            origin=" New York"
            destination="Los Angeles"
            depatureTime="Mar 03, 12H"
            arivalTime="Mar 03, 12H"
            availableSpace="24 KG"
            price="$7"
            onClick={handelClick}
          />
          <FlightCard
            userName="Abdel Aziz"
            origin=" Company"
            destination="Location"
            depatureTime="Mar 03, 12H"
            arivalTime="Mar 03, 12H"
            availableSpace="45 KG"
            price="$10"
            onClick={handelClick}
          />
          <FlightCard
            userName="Bilkiss Biedi"
            origin=" Company"
            destination="Location"
            depatureTime="Mar 03, 12H"
            arivalTime="Mar 03, 12H"
            availableSpace="24 KG"
            price="$12"
            onClick={handelClick}
          />
          <FlightCard
            userName="B1234"
            origin=" Company"
            destination="Location"
            depatureTime="Mar 03, 12H"
            arivalTime="Mar 03, 12H"
            availableSpace="24 KG"
            price="$8"
            onClick={handelClick}
          />
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Landing;
