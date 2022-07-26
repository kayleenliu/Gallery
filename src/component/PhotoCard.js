import React, { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import FavoritesContext from "../store/favorites-context";

export default function PhotoCard(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const photoIsLiked = favoritesCtx.photoIsLiked(props.id);

  function toggleFavoriteStatusHandler() {
    if (photoIsLiked) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        text: props.text,
        url: props.url,
      });
    }
  }

  return (
    <center>
      <MDBCard style={{ width: "33rem" }}>
        <MDBCardImage
          src={props.url}
          position="top"
          alt={props.title}
          style={{ height: "45rem" }}
        />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>{props.text}</MDBCardText>
          {/* <MDBBtn color="danger" onClick={toggleFavoriteStatusHandler}>
            <MDBIcon fas icon="heart" />
            &nbsp;&nbsp;{photoIsLiked ? "Unlike" : "Like"}
          </MDBBtn> */}
          {photoIsLiked && (
            <MDBBtn color="light" onClick={toggleFavoriteStatusHandler}>
              <MDBIcon fas icon="heart" color="danger" />
              &nbsp;&nbsp; Unlike
            </MDBBtn>
          )}

          {!photoIsLiked && (
            <MDBBtn color="danger" onClick={toggleFavoriteStatusHandler}>
              <MDBIcon fas icon="heart" />
              &nbsp;&nbsp; Like
            </MDBBtn>
          )}
        </MDBCardBody>
      </MDBCard>
    </center>
  );
}
