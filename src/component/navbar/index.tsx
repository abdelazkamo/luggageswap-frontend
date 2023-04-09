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
      <MDBNavbar expand="lg" className="bg">
        <MDBContainer fluid>
          <div className="d-flex">
            <MDBNavbarBrand href="#">
              <img src={logo} height="50" alt="" loading="lazy" />
            </MDBNavbarBrand>
          </div>
          <div>
            <MDBNavbarNav>
              <div className="d-flex">
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="#">
                    <div className="menuitem">Home</div>
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink href="#">
                    <div className="menuitem">Features</div>
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink href="#">
                    <div className="menuitem">Pricing</div>
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
