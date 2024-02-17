"use strict";
console.log("I am hungry");
console.log("Test");
function printDouble(msg) {
    console.log(msg);
    console.log(msg);
}
printDouble("Hello, world!");
const btn = document.querySelector("#btn");
console.log(btn);
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    console.log("Button was clicked");
});
