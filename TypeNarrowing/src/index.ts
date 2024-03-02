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