const readlineSync = require("readline-sync");

let FirstNumber = readlineSync.question("Give me a number with a decimal part ")
let SecondNumber = readlineSync.question("Give me a another number with a decimal part ")

console.log(Math.round(FirstNumber) * SecondNumber)