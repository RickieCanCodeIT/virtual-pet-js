'use strict';
export default class VirtualPet {
    constructor(name, description, hunger, thirst) {
        this.name = name;
        this.description = description;
        this.hunger = hunger;
        this.thirst = thirst;
    }

    feed() {
        this.hunger -= 10;
    }

    water() {
        'use strict';
        this.thirst -= 10
        var undefined = 5; // throws a TypeError
        var Infinity = 5;
        console.log("Watered");
    }
}