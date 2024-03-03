function triple(value: number | string) {
    if (typeof value === 'number') {
        return value * 3;
    }
    return value.repeat(3);
}

const el = document.getElementById("idk");

if (el) {
    el
} else {
    el
}

const printLetters = (word?: string) => {
    if (word) {
        for (const letter of word) {
            console.log(letter);
        }
    }
    else {
        console.log("No word passed in!");
    }
}

// Equality Narrowing
function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x
    } else {
        y
    }
}

interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRunTime(media: Movie | TVShow) {
    if ('duration' in media) {
        return media.duration;
    }
    return media.numEpisodes * media.episodeDuration;
}

console.log(getRunTime({ title: "The Matrix", duration: 134 }));
console.log(getRunTime({ title: "Breaking Bad", numEpisodes: 62, episodeDuration: 48 }));

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}

class User {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        console.log(entity.username);
    }
    else {
        console.log(entity.name);
    }
}

// Type Predicates
interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        return "Meow";
    } else {
        return "Woof";
    }
}

// Discriminated Unions
interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case "rooster":
            return "Cockadoodledoo";
        case "cow":
            return "Mooo!";
        case "pig":
            return "Oink!";
        case "sheep":
            return "Baaa!";
        default:
            // We should never make it here, but if we do, TypeScript will know that it's a never type
            const _exhausticeCheck: never = animal;
            return _exhausticeCheck;
    }
}

const stevie: Rooster = {
    name: "Stevie",
    weight: 5,
    age: 2,
    kind: "rooster"
};

console.log(getFarmAnimalSound(stevie));