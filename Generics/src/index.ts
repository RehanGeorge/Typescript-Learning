const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;

console.dir(inputEl.value);

const btn = document.querySelector<HTMLButtonElement>('.btn');

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

// function identity(item: any): any {
//     return item;
// }

function identity<Type>(item: Type): Type {
    return item;
}

identity<string>("Hello");
identity<number>(7);

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([1, 2, 3]));