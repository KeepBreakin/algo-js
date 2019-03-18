let FirstArr = [1, 2, 3, 4, 5];
let SecondArr = [100, 101, 102];

var avg = 0;
var sum = 0;
var avg1= 0;
var sum2= 0;

for (var i = 0; i < FirstArr.length; i++) sum += FirstArr[i];

for (i = 0; i < FirstArr.length; i++) avg = sum / FirstArr.length;

{
  console.log(avg);
}


for (var i = 0; i < SecondArr.length; i++) sum2 += SecondArr[i];

for (i = 0; i < SecondArr.length; i++) avg2 = sum2 / SecondArr.length;

{
    console.log(avg2);
  }