import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";
import "./assets/css/tiny-slider.css";
import PetsList from "./Components/PetsList";
import petStore from "./petStore";
import react, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddPetModal from "./Components/PetCreateModal/Modal";

function App() {
  const pets = petStore.pets;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <PetsList pets={pets} />
      <Button variant="primary" onClick={handleShow}>
        Add pet
      </Button>
      <AddPetModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default App;
