const readlineSync = require("readline-sync");

let minNumber = readlineSync.question("Give me a min-number?");
let maxNumber = readlineSync.question("Give me a max-number?");
let currentNumber = readlineSync.question("Give me a current number?");

if (currentNumber >= minNumber && currentNumber <= maxNumber) {
  console.log(currentNumber);
} else if (minNumber >= maxNumber) {
  console.log("ERRORRRRRRRRRRRRRR");
} else {
  console.log("ERROR");
}
