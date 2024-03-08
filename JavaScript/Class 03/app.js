// loops are basically called as in programming for iteration

console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");

// loops are of three types in JS

// 1) FOR LOOP

// basic syntax of for loop

// for(initialization;condition;increment/decrement){

// }

for (var i = 1; i <= 20; i++) {
  console.log("hello world");
}

var number = +prompt("Enter a number to generate table");

var range = +prompt("Enter range");

for (var i = 1; i <= range; i++) {
  document.write(number + "x" + i + "=" + number * i + "<br>");
}

// KarAChi

var searchCity = prompt("Enter where do you live??");

var updateInput = searchCity.toLowerCase();

var cityArr = ["karachi", "lahore", "islamabad", "multan"];

var flag = "false";

for (var i = 0; i < cityArr.length; i++) {
  if (updateInput === cityArr[i]) {
    flag = "true";
  }
}

if (flag === "true") {
  console.log("found it..");
} else {
  console.log("not found..");
}

if (faraz === "true") {
  console.log("found it..");
} else {
  console.log("not found..");
}

var str = "Muhammad Faraz";

console.log(str.slice(0, 7));

var arr = [
  ["faraz", 100],
  [true, "abc"],
];

// var arr = ["karachi", ["lahore", "islamabad"], "multan"];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[1].length; j++) {
    console.log(arr[i][j]);
  }
}

// console.log(arr[1][2][0]);

// 2) WHILE LOOP

// 3) DO WHILE LOOP

// please silence of namaz
