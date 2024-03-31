var date = new Date();

console.log(date.getTime());

console.log(date.getDay());  

var daysArr = ["sunday", "mon", "tues", "wed", "thurs", "fri", "sat"];

console.log(daysArr[date.getDay()]);

var newYearDate = new Date("1 january 2025").getTime();

var currentMilli = new Date().getTime();

var diff = newYearDate - currentMilli;

var months = diff / (1000 * 60 * 60 * 24);

console.log("months===>", months);

console.log(currentMilli);

var date = new Date();

date.setFullYear(2006);
date.setMonth(0);
date.setDate(25);

console.log(date);

// Switch Statement

// var age = +prompt("Enter your age");

// switch (age) {
//   case 16:
//     alert("not eligible");
//     break;
//   case 17:
//     alert("not eligible");
//     break;
//   case 18:
//     alert("eligible..");
//     break;
//   case 19:
//     alert("eligible..");
//     break;

//   default:
//     alert("not found..");
// }

// while loop

// var i = 0;
// while (i < 0) {
//   console.log(i);
//   i++;
// }

// do-while loop

// var i = 0;

/*do {
  console.log(i);
  i++;
} while (i < 2);*/

// for (var i = 0; i < 0; i++) {
//   console.log(i);
// }

// Functions

function faraz() {
  console.log("hello world");
}

// There are 3 types of Functions in JS

// 1) FUNCTION DECALRATION

// 2) ANONOMOUS FUNCTION

// 3) FAT ARROW FUNCTION / ARROW FUNCTION

// faraz();
// faraz();
// faraz();
// faraz();
// faraz();
// faraz();
