const readlineSync = require("readline-sync");

let Firstname = readlineSync.question("Whats your first name?");
let LastName = readlineSync.question("Whats your last name?");
let city = readlineSync.question("What city do u live in");

console.log("My name is " + Firstname + " " + LastName + " and i live in " + city );