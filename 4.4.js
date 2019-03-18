const readlineSync = require("readline-sync");

let arr = [];
let t = readlineSync.question("Geef een nummer van 1 tot 10");

function multiRand(data) {
  for (var i = 0; i < t; i++) data.push(Math.round(Math.random() * t));
  return data;
}

console.log(multiRand(arr));

function average(arr) {
  let sum = eval(arr.join("+"));
  return sum / arr.length;
}

console.log("Het gemiddelde is " + average(arr).toFixed(2));

function minimum(arr) {
  return Math.min.apply(null, arr);
}

console.log("Minimum cijfer is " + minimum(arr));

function maximum(arr) {
  return Math.max.apply(null, arr);
}

console.log("Maximale cijfer is " + maximum(arr));
