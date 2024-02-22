"use strict";
// class Player {
//     public readonly first: string;
//     public readonly last: string;
//     private score: number = 0;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     private secretMethod(): void {
//         console.log('This is a secret method');
//     }
// }
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score must be greater than 0');
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 100;
    }
}
const elton = new Player('Elton', 'John');
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`This is a ${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("nike", "blue");
class Employee {
    constructor(name, last) {
        this.name = name;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hours) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hours = hours;
    }
    getPay() {
        return this.hourlyRate * this.hours;
    }
}
const betty = new FullTimeEmployee('Betty', 'Smith', 50000);
console.log(betty.getPay());
const bill = new PartTimeEmployee('Bill', 'Jones', 20, 40);
console.log(bill.getPay());
