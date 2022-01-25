import { action, makeObservable, observable } from "mobx";
import petsData from "./petsData";

class PetStore {
  pets = petsData;

  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
      addPet: action,
    });
  }

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };

  addPet = (pet) => {
    pet.id = this.pets[this.pets.length - 1].id + 1;
    this.pets.push(pet);
  };
}

const petStore = new PetStore();
export default petStore;
