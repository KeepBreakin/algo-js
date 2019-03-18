const readlineSync = require("readline-sync");

let Age = readlineSync.question("What is your age?");

if (Age >= 18) {
  console.log("Je bent meerderjarig");
} else {
  console.log("Je bent minderjarig");
}
