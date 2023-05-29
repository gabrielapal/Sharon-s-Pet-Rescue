const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            return "${name} needs a nap. Zzz...";
            pet.isTired = 1;
        }
        play: function () {
            if (this.isTired === 10) {
                return `Too tired to play.`;
            } else {
            console.log("Yay! ${name} loves to play!");
            pet.isTired = +1;
            }
        }
    }
}
