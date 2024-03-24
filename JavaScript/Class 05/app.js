// Q: To find the smallest number in an array

var arr = [2, 4, 3, 6, 8, 1, 7, 5];
var minimium = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > minimium) {
    minimium = arr[i];
  }
}
console.log(minimium);

// Q create a program of palindrome..

// madam

// level

// civic

// rotator.

// repaper.

// deed.

// peep.

// wow.

// noon.

for (var i = str.length; i >= 0; i--) {}

var userInput = prompt("Enter a word...");
var check = "";

for (var i = userInput.length - 1; i >= 0; i--) {
  check += userInput[i];
}

if (userInput === check) {
  console.log(userInput, " is a palindrome word..");
} else {
  console.log("it is not a palindrome word..");
}

var name = "Muhammad";

name = "faraz" + ;

console.log(name);

console.log(Math.random() * 50);

var number = 5.957;

console.log(Math.floor(number));

var headUser = prompt("Enter your name");

var tailUser = prompt("Enter your name");

var toss = Math.random() * 2;

var convert = Math.floor(toss);

if (convert === 0) {
  console.log(headUser + " win the toss");
} else {
  console.log(tailUser + " win the toss");
}

// Q: create a password generator using Math object

var randomValues =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890$@";

for (var i = 0; i < 10; i++) {
  var randomNum = Math.floor(Math.random() * randomValues.length);
  console.log(randomValues[randomNum]);
}

var number = Math.random() * 10;

console.log(number.toFixed(3));

var name = "hello students my name is johnson";

console.log(name.charAt(6));

var date = new Date();

var daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturaday",
];

console.log(daysArr[date.getDay()]);
