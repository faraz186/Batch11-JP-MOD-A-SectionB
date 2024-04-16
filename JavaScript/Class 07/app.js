// Functions


function abc() {
    console.log('hello students');

}

abc()
abc()
abc()
abc()
abc()
abc()
abc()


function biodata(input1, input2, input3) {


    console.log("Hello " + input1 + ". my age is " + input2 + ". i live in " + input3);

}

biodata(prompt('enter your name'), prompt('enter your age'), prompt('enter your city'))
//

function sum(a, b) { // parameter

    console.log(a + b);
}

sum(+prompt(), +prompt()) // argument


var tableNum = +prompt("Enter a number");
var tableLength = +prompt("Enter a length");

for (var i = 1; i <= tableLength; i++) {
    document.write(tableNum + "x" + i + "=" + tableNum * i + "<br>")
}


function multiplicationTable(tableNum, tableLen) {
    for (var i = 1; i <= tableLen; i++) {
        document.write(tableNum + "x" + i + "=" + tableNum * i + "<br>")
    }
}

multiplicationTable(+prompt("Enter a number"), +prompt("Enter a length"))



function sum(a, b) {
    return a + b
}

console.log(sum(15, 20));




var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var res = arr.slice(0, 5)

console.log(res);




function calc(num1, opr, num2) {
    switch (opr) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "invalid operator"
    }

}
console.log(calc(10, "+", 25));
console.log(calc(15, "$", 5));
console.log(calc(6, "*", 10));




// local vs global variables

var a = 20; // global variable

function add() {
    var a = 10; // local variable
    return a
}

add()
console.log(a);








