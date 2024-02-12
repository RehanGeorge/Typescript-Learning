let age: number | string = 21;
age = 23;
age = "24"

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = { x: 10, y: 20 };
coordinates = { lat: 10, long: 20 };

function printAge(age: number | string) {
    console.log(age);
}

function calculateTax(price: number | string, tax: number) {
    if (typeof price === "number") {
        return price * tax;
    }
    price = price.replace("$", "");
    return parseFloat(price) * tax;
}