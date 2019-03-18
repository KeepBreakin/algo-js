const readlineSync = require("readline-sync");

let ShoeSize = readlineSync.question("What is your shoesize? ")
let BirthYear = readlineSync.question("What is your birthyear? ")

let Calc = (ShoeSize * 2 + 5) * 50 - BirthYear + 1766

console.log(Calc)
