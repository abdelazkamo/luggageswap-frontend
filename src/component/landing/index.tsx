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

  const handelClick = () => {};

  return (
    <MDBContainer className="job-grid">
      <MDBCard
        className="bg-white my-5 mx-auto"
        style={{ borderRadius: "1rem", maxWidth: "1200px", height: "150px" }}
      >
        <MDBCardBody className="p-5 w-100 d-flex flex-column">
          <form className="search-form">
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
          </form>
        </MDBCardBody>
      </MDBCard>
      <MDBRow className="job-card-row">
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
  );
};

export default Landing;
