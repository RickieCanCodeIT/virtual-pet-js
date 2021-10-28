import VirtualPet from "./virtual-pet.js";

describe('VirtualPet', () => {
    test('Virtual Pet has name', () => {
        //assignment
        const tempPet = new VirtualPet("Vlad", "Brown", 50, 50);
        //action and assertion
        expect(tempPet.name).toMatch("Vlad");
    });

    test('Virtual Pet can be fed', () => {
        //assignment
        const tempPet = new VirtualPet("Vlad", "Brown", 50, 50);
        //action
        tempPet.feed();
        //assertion
        expect(tempPet.hunger).toEqual(40);
    });

    test('Virtual pet can be watered', () => {
        //assignment
        const tempPet = new VirtualPet("Vlad", "Brown", 50, 50);
        //action
        tempPet.water();
        //assertion
        expect(tempPet.thirst).toEqual(40);
    })
});