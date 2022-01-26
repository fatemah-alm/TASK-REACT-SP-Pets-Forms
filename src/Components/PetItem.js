import petStore from "../petStore";
import UpdatePetModal from "./PetUpdateModal.js/PetUpdateModal";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function PetItem(props) {
  const pet = props.pet;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => petStore.handleAdopt(pet.id)}
          >
            Adopt
          </button>
          <Button variant="primary" onClick={handleShow}>
            update Pet
          </Button>
          <UpdatePetModal
            show={show}
            handleClose={handleClose}
            petname={pet.name}
            petimage={pet.image}
            petType={pet.type}
            id={pet.id}
          />
        </div>
      </div>
    </div>
  );
}
