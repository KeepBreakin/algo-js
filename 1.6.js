const readlineSync = require("readline-sync");

let FirstNumber = readlineSync.question("Give me a first number.." );
let SecondNumber = readlineSync.question("Give me a second number.. ");

console.log(FirstNumber % SecondNumber);