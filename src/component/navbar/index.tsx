import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import "./index.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <MDBNavbar
        expand="lg"
        className="bg"
        style={{ position: "fixed", top: "0", width: "100%", zIndex: "1" }}
      >
        <MDBContainer fluid className="logo">
          <div className="d-flex log">
            <MDBNavbarBrand href="#">
              <img src={logo} height="50" alt="" loading="lazy" />
            </MDBNavbarBrand>
          </div>
          <div>
            <MDBNavbarNav className="log2">
              <div className="d-flex">
                <MDBNavbarItem>
                  <MDBNavbarLink
                    active
                    aria-current="page"
                    href="#"
                    style={{ fontSize: "20px" }}
                  >
                    <i className="fas fa-search"></i> Search{" "}
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink href="#" style={{ fontSize: "20px" }}>
                    <i className="fas fa-plus"></i> Publish a ride{" "}
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink href="#">
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </div>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
