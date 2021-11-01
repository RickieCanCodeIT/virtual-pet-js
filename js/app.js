'use strict'
import VirtualPet from "../virtual-pet.js";
import VirtualPetUiContext from "./VirtualPetUiContext.js";
const petsDiv = document.querySelector(".pets");
const makePetButton = document.querySelector(".MakePet");
const newPetName = document.querySelector("#newPetName");
const newPetDesciption = document.querySelector('#newPetDesc');
const newPetImageUrl = document.querySelector("#petImage");
const feedAllPetsButton = document.querySelector(".feedAllPets");
const waterAllPetsButton = document.querySelector(".waterAllPets");
const virtualPetShelter = [];


feedAllPetsButton.addEventListener('click',()=>{
    virtualPetShelter.forEach(element =>{
        element.virtualPet.feed();
    })
    updatePetsUi(virtualPetShelter);
});

waterAllPetsButton.addEventListener('click',()=>{
    virtualPetShelter.forEach(element =>{
        element.virtualPet.water();
    })
    updatePetsUi(virtualPetShelter);
});

makePetButton.addEventListener('click', () => {
    makePet(newPetName.value, newPetDesciption.value, 50, 50);
});



makePet("Vlad", "Cool brown cat", 50, 50);

function makePet(name, description, hunger, thirst, imageUrl) {
    const tempPet = new VirtualPet(name, description, hunger, thirst, imageUrl);
    const petContainer = document.createElement("div");
    let tempPetUiContext = new VirtualPetUiContext(tempPet,petContainer);
    virtualPetShelter.push(tempPetUiContext);
    petContainer.style.backgroundColor = getRandomColor();

    const petImage = document.createElement("img");
    petImage.src = tempPet.imageUrl;
    petImage.style.height = "200px";
    petImage.alt = tempPet.description;
    petContainer.append(petImage);
    
    const petName = document.createElement("h1");
    petName.innerText = tempPet.name;
    petContainer.append(petName);

    const petDescription = document.createElement("p");
    petDescription.innerText = tempPet.description;
    petContainer.append(petDescription);

    const petHunger = document.createElement("p");
    petHunger.classList.add("petHunger");
    petHunger.innerText = "Hunger: " + tempPet.hunger;
    petContainer.append(petHunger);

    const petThirst = document.createElement("p");
    petThirst.classList.add("petThirst");
    petThirst.innerText = "Thirst: " + tempPet.thirst;
    petContainer.append(petThirst);

    const feedButton = document.createElement("button");
    feedButton.innerText = "Feed";
    petContainer.append(feedButton);
    feedButton.addEventListener('click', () => {
        tempPet.feed();
        // console.log(tempPet);
        petHunger.innerText = "Hunger: " + tempPet.hunger;
    });
    const drinkButton = document.createElement("button");
    drinkButton.innerText = "Water your pet";
    petContainer.append(drinkButton);
    drinkButton.addEventListener('click', ()=> {
        tempPet.water();
        petThirst.innerText = "Thirst: " + tempPet.thirst;
    });
    petsDiv.append(petContainer);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updatePetsUi(petContainerArray){
    petContainerArray.forEach(element => {
        element.petContainer.querySelector(".petThirst").innerText ="Thirst: " + element.virtualPet.thirst;
        element.petContainer.querySelector(".petHunger").innerText ="Hunger: " + element.virtualPet.hunger;
    });
}