import { Dog } from "./Dog.js";
import ShelterDog from "./ShelterDog.js";
import { add, multiply, divide } from "./utils.js";
console.log("From Index file");


const elton = new Dog("Elton", "Golden Retriever", 3);
elton.bark();

console.log(add(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

const buffy = new ShelterDog("Buffy", "Pitbull", 2, "Paws");