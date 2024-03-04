"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = exports.add = void 0;
function add(a, b) {
  return a + b;
}
exports.add = add;
function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
exports.sample = sample;
