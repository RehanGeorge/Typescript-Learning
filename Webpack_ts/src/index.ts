import { Dog } from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";
console.log("From Index file");


const elton = new Dog("Elton", "Golden Retriever", 3);
elton.bark();

console.log(add(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

const buffy = new ShelterDog("Buffy", "Pitbull", 2, "Paws");