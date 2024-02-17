console.log("I am hungry");
console.log("Test");

function printDouble(msg: string) {
    console.log(msg);
    console.log(msg);
}

printDouble("Hello, world!");

const btn = document.querySelector("#btn");
console.log(btn);

btn?.addEventListener("click", function() {
    console.log("Button was clicked");
})