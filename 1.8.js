const readlineSync = require("readline-sync");

let Age = readlineSync.question("What is your age please? ")
let Sex = readlineSync.question("What is your sex? ")
let Living = readlineSync.question("Where are u from? ")

console.log("So.. you are " + Age + " year old " + Sex + " out of " + Living)