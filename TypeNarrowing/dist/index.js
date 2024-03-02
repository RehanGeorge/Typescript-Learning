"use strict";
function triple(value) {
    if (typeof value === 'number') {
        return value * 3;
    }
    return value.repeat(3);
}
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (const letter of word) {
            console.log(letter);
        }
    }
    else {
        console.log("No word passed in!");
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x === y) {
        x;
    }
    else {
        y;
    }
}
function getRunTime(media) {
    if ('duration' in media) {
        return media.duration;
    }
    return media.numEpisodes * media.episodeDuration;
}
console.log(getRunTime({ title: "The Matrix", duration: 134 }));
console.log(getRunTime({ title: "Breaking Bad", numEpisodes: 62, episodeDuration: 48 }));
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log(entity.username);
    }
    else {
        console.log(entity.name);
    }
}
