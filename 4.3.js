let arr = [];
function multiRand(data) {
  for (var i = 0, t = 10; i < t; i++) data.push(Math.round(Math.random() * t));
  return data;
}

console.log(multiRand(arr));
