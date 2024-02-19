/*
console.log("I am hungry");
console.log("Test");

function printDouble(msg: string) {
    console.log(msg);
    console.log(msg);
}

printDouble("Hello, world!");
*/

const btn = document.querySelector("#btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("#todolist")!;

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo = input.value;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newTodo);
    newLI.append(checkbox);
    list.append(newLI);
}

form.addEventListener("submit", handleSubmit);

/*
console.log(btn);

//Type Assertion
// const input = document.getElementById("todoinput")!;
// (<HTMLInputElement>input).value

btn.addEventListener("click", function() {
    alert(input.value);
});
*/

/*
//Type Assertion
let mystery: unknown = "Hello, world!";

const numChars = (mystery as string).length;
*/