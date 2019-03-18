const readlineSync = require("readline-sync");

let Breedte = readlineSync.question("Wat is de breedte?");
let Hoogte = readlineSync.question("Wat is de hoogte?");

function calcSurface(Breedte, Hoogte) {
  return Breedte * Hoogte;
}

console.log("De totale oppervlakte is " + calcSurface(Breedte, Hoogte));
