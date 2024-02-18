"use strict";
console.log("I am hungry");
console.log("Test");
function printDouble(msg) {
    console.log(msg);
    console.log(msg);
}
printDouble("Hello, world!");
const btn = document.querySelector("#btn");
const input = document.getElementById("todoinput");
console.log(btn);
//Type Assertion
// const input = document.getElementById("todoinput")!;
// (<HTMLInputElement>input).value
btn.addEventListener("click", function () {
    alert(input.value);
});
/*
//Type Assertion
let mystery: unknown = "Hello, world!";

const numChars = (mystery as string).length;
*/ 
