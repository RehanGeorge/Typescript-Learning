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
    protected _score: number = 0;
    constructor(public readonly first: string, public readonly last: string) {}

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error('Score must be greater than 0');
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 100;
    }
}

const elton = new Player('Elton', 'John');
// elton.score = 100;
// elton.secretMethod();

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}
    print() {
        console.log(`This is a ${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red")

const jacket1 = new Jacket("nike", "blue")

abstract class Employee {
    constructor(public name: string, public last: string) {}
    abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hours: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hours;
    }
}

const betty = new FullTimeEmployee('Betty', 'Smith', 50000);
console.log(betty.getPay());

const bill = new PartTimeEmployee('Bill', 'Jones', 20, 40);
console.log(bill.getPay());