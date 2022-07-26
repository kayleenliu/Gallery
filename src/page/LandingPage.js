import PhotoCard from "../component/PhotoCard";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import MyNav from "../component/MyNav";

export default function LandingPage() {
  const data = [
    {
      title: "Kitty",
      text: "wow, he is so cute!",
      url: "https://images.unsplash.com/photo-1654955836276-ae14e45e6d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Coffee",
      text: "have a good rest!",
      url: "https://images.unsplash.com/photo-1655312214809-553e851782ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80",
    },
    {
      title: "Spring",
      text: "Lantern",
      url: "https://images.unsplash.com/photo-1655003816991-7ae2b3d2f138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  return (
    <>
      <MyNav></MyNav>
      <MDBContainer>
        <br></br>
        <MDBRow>
          <MDBCol>
            <PhotoCard
              title={data[0].title}
              url={data[0].url}
              text={data[0].text}
            ></PhotoCard>
          </MDBCol>
          <MDBCol>
            <PhotoCard
              title={data[1].title}
              url={data[1].url}
              text={data[1].text}
            ></PhotoCard>
          </MDBCol>
          <MDBCol>
            <PhotoCard
              title={data[2].title}
              url={data[2].url}
              text={data[2].text}
            ></PhotoCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
