let arr = [1, 2, 3, 4, 5];
let minNum = 0;
let maxNum = 0;

maxNum = Math.max.apply(null, arr);
minNum = Math.min.apply(null, arr);

console.log("Min number " + minNum);
console.log("Max number " + maxNum);
