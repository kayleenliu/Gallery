import PhotoCard from "./PhotoCard";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function PhotoList(props) {
  return (
    <>
      {props.photos.map((photo) => (
        <>
          <MDBRow>
            <MDBCol>
              <PhotoCard
                key={photo.id}
                id={photo.id}
                title={photo.title}
                url={photo.url}
                text={photo.text}
              ></PhotoCard>
            </MDBCol>
          </MDBRow>
          <br></br>
        </>
      ))}
    </>
  );
}
