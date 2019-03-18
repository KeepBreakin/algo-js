const readlineSync = require("readline-sync");

let FavNumber = parseInt(
  readlineSync.question("What is your favourite number?")
);

while (FavNumber !== 42) {
  console.log("Try again");
  FavNumber = parseInt(readlineSync.question("Give me a lucky number"));
}

console.log("You win");
