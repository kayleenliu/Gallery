import PhotoList from "../component/PhotoList";
import { useState, useEffect } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import MyNav from "../component/MyNav";

export default function AllPhotos() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPhotos, setLoadedPhotos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://gallery-cd3ac-default-rtdb.firebaseio.com/photos.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const photos = [];
        for (const key in data) {
          const photo = {
            id: key,
            ...data[key],
          };

          photos.push(photo);
        }

        setIsLoading(false);
        setLoadedPhotos(photos);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <MyNav></MyNav>
      <MDBContainer>
        <br></br>
        <PhotoList photos={loadedPhotos}></PhotoList>
      </MDBContainer>
    </>
  );
}
