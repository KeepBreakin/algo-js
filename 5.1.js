const readlineSync = require("readline-sync");

let name = readlineSync.question("What is your favo serie ");
let year = readlineSync.question("When was it released ");
let castmem = readlineSync.question("Who were the cast members ");

function askTvSerie() {
  let data = {
    naam: name,
    jaar: year,
    castmember: castmem
  };

  console.log(data);

  let myJSON = JSON.stringify(data);
  console.log(myJSON);
}
askTvSerie();
