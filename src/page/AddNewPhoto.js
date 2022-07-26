import React from "react";
import MyNav from "../component/MyNav";
import { MDBContainer } from "mdb-react-ui-kit";
import AddForm from "../component/AddForm";
import { useNavigate } from "react-router-dom";

export default function AddNewPhoto() {
  const navigate = useNavigate();
  function addPhotoHandler(photoData) {
    fetch("https://gallery-cd3ac-default-rtdb.firebaseio.com/photos.json", {
      method: "POST",
      body: JSON.stringify(photoData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <>
      <MyNav></MyNav>
      <MDBContainer>
        <br></br>
        <AddForm onAddPhoto={addPhotoHandler}></AddForm>
      </MDBContainer>
    </>
  );
}
