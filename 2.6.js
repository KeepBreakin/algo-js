const readlineSync = require("readline-sync");
let ChooseNum = readlineSync.question("Choose a number between 1 and 7");
var Days = new Array(7);
(Days[1] = "Monday"),
  (Days[2] = "Tuesday"),
  (Days[3] = "Wednesday"),
  (Days[4] = "Thursday"),
  (Days[5] = "Friday"),
  (Days[6] = "Saturday"),
  (Days[7] = "Sunday");

console.log("The day is " + Days[ChooseNum]);
