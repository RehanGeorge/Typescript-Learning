import _ from "lodash";
export function add(a: number, b: number): number {
    // return a + b;
    return _.add(a, b);
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    return a / b;
}