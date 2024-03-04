"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const placeholderAPI = "https://jsonplaceholder.typicode.com/users";
axios_1.default
    .get(placeholderAPI)
    .then((response) => {
    // printUser(response.data);
    response.data.forEach((user) => {
        printUser(user);
        console.log("====================================");
    });
})
    .catch((error) => {
    console.log(error);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
