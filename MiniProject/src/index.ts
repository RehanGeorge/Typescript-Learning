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

interface Todo {
    text: string;
    completed: boolean;
}

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) {
        return [];
    }
    return JSON.parse(todosJSON);
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
}

form.addEventListener("submit", handleSubmit);

function createTodo(todo: Todo) {
    const newTodo = todo.text;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function() {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(todos))
    })
    newLI.append(newTodo);
    newLI.append(checkbox);
    list.append(newLI);
}

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