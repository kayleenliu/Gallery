import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function PhotoCard(props) {
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
          <MDBBtn color="danger">
            <MDBIcon fas icon="heart" />
            &nbsp;&nbsp;LIKE
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </center>
  );
}
