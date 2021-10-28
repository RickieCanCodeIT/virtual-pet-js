'use strict'
import VirtualPet from "../virtual-pet.js";
const petsDiv = document.querySelector(".pets");

makePet("Vlad", "Cool brown cat", 50, 50);

function makePet(name, description, hunger, thirst) {
    const tempPet = new VirtualPet(name, description, hunger, thirst);
    const petContainer = document.createElement("div");

    const petName = document.createElement("h1");
    petName.innerText = tempPet.name;
    petContainer.append(petName);

    const petDescription = document.createElement("p");
    petDescription.innerText = tempPet.description;
    petContainer.append(petDescription);

    const petHunger = document.createElement("p");
    petHunger.innerText = "Hunger: " + tempPet.hunger;
    petContainer.append(petHunger);

    const petThirst = document.createElement("p");
    petThirst.innerText = "Thirst: " + tempPet.thirst;
    petContainer.append(petThirst);

    const feedButton = document.createElement("button");
    feedButton.innerText = "Feed";
    petContainer.append(feedButton);
    
    petsDiv.append(petContainer);
}