const fruits = ["apple", "banana", "cherry"];
console.log("=== for...of: Array ===");
for (let fruit of fruits) {
  console.log("fruit:", fruit);
}
console.log("\n");

const word = "HELLO";
console.log("=== for...of: String ===");
for (let ch of word) {
  console.log("char:", ch);
}
console.log("\n");

const numbers = new Set([1, 2, 2, 3]);
console.log("=== for...of: Set ===");
for (let num of numbers) {
  console.log("set:", num);
}
console.log("\n");

const person = new Map([
  ["name", "Alice"],
  ["age", 20],
  ["city", "Bangkok"]
]);
console.log("=== for...of: Map ===");
for (let [key, value] of person) {
  console.log("map:", key, "=", value);
}
console.log("\n");

function showArgs() {
  console.log("=== for...of: arguments ===");
  for (let arg of arguments) {
    console.log("arg:", arg);
  }
}
showArgs(10, 20, 30);
console.log("\n");

const colors = ["red", "green", "blue"];
console.log("=== for...of: Array.entries() ===");
for (let [index, color] of colors.entries()) {
  console.log(index, color);
}
