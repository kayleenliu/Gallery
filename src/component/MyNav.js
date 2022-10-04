import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function MyNav() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <>
      <MDBNavbar sticky expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>My Gallery</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink aria-current="page">
                  <Link to="/" style={{ color: "grey" }}>
                    Home
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current="page">
                  <Link to="/add" style={{ color: "grey" }}>
                    New Photo
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to="/favorites" style={{ color: "grey" }}>
                    Favorites (<span>{favoritesCtx.totalFavorites}</span>)
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
