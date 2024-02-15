interface Point {
    x: number;
    y: number;
}

const pt: Point = {x: 1234, y: 5678};


interface Person {
    readonly id: number;
    name: string;
    last?: string;
    nickname?: string;
    sayHi: () => string;
    sayHello(): string;
}

const thomas: Person = { id: 123, name: "Thomas", last: "Hardy", sayHi: () => "Hello", sayHello: () => "Hi" };


interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Shoes",
    price: 100,
    applyDiscount(discount: number) {
        const newPrice = this.price - discount;
        return newPrice;
    }
}

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 3,
    breed: "Golden Retriever",
    bark() {
        return "Woof!";
    }
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "seeing eye" | "emotional support";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 5,
    breed: "Labrador",
    bark() {
        return "Woof!";
    },
    job: "seeing eye"
}

interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const pierre: Engineer = {
    name: "Pierre",
    id: 123,
    email: "",
    level: "Senior",
    languages: ["JavaScript", "TypeScript"]
}