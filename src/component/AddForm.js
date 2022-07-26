import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

export default function AddForm(props) {
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const desInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredURL = urlInputRef.current.value;
    const enteredDes = desInputRef.current.value;

    const photoData = {
      title: enteredTitle,
      url: enteredURL,
      text: enteredDes,
    };

    props.onAddPhoto(photoData);
  }

  return (
    <>
      <MDBCard
        style={{
          maxWidth: "44rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10%",
        }}
      >
        <MDBCardBody>
          <center>
            <MDBCardTitle>Add Your New Photo Here</MDBCardTitle>
          </center>

          <Form onSubmit={submitHandler}>
            <FloatingLabel controlId="floatingTitle" label="Photo Title">
              <Form.Control
                type="text"
                placeholder="Photo Title"
                className="mb-3"
                required
                ref={titleInputRef}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingURL" label="Photo URL">
              <Form.Control
                type="url"
                placeholder="Photo URL"
                className="mb-3"
                required
                ref={urlInputRef}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingDes" label="Description">
              <Form.Control
                as="textarea"
                placeholder="Description"
                className="mb-3"
                style={{ height: "100px" }}
                required
                ref={desInputRef}
              />
            </FloatingLabel>
            <br></br>
            <center>
              <MDBBtn color="success">Submit</MDBBtn>
            </center>
          </Form>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
