function square(num: number) {
    return num * num;
}

function greet(person: string) {
    return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

function greeter(person: string = "stranger") {
    return `Hi there, ${person}!`;
}

function add(a: number, b: number): number {
    return a + b;
}

function rando(num: number) {
    if (Math.random() > 0.5) {
        return "over 0.5";
    }
    return num;
}