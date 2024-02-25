"use strict";
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl.value);
const btn = document.querySelector('.btn');
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
// function identity(item: any): any {
//     return item;
// }
function identity(item) {
    return item;
}
identity("Hello");
identity(7);
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3]));
console.log(getRandomElement([true, false, 3]));
