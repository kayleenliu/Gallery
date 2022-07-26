import React, { useContext } from "react";
import MyNav from "../component/MyNav";
import FavoritesContext from "../store/favorites-context";
import PhotoList from "../component/PhotoList";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <>
        <center>
          <h1 style={{ marginTop: "10%" }}>
            No Favorites Yet<br></br>
            Let's start adding some!
          </h1>
          <br></br>
          <MDBBtn color="light">
            <Link to="/">GO BACK TO HOME</Link>
          </MDBBtn>
        </center>
      </>
    );
  } else {
    content = (
      <>
        <br></br>
        <center>
          <h2>Favorite List</h2>
        </center>

        <PhotoList photos={favoritesCtx.favorites}></PhotoList>
      </>
    );
  }

  return (
    <>
      <MyNav></MyNav>
      {content}
    </>
  );
}
