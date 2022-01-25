import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import petStore from "../../petStore";

function AddPetModal({ show, handleClose }) {
  const [pet, setPet] = useState({ name: "", type: "", image: "" });

  const handleChange = (event) => {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    petStore.addPet(pet);
  };

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new pet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name of your pet</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="Enter pet name"
                  onChange={handleChange}
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Pet Type</Form.Label>
                <Form.Select name="type" onChange={handleChange}>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Rabbit</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image of your lovely pet</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="upload pet image"
                  onChange={handleChange}
                  name="image"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default AddPetModal;
