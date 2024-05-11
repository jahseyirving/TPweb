alert("Hello there random user! :")
var visitorName = prompt("What's your name : ")
var isCoolWithIt = confirm("Are you ok with it?")
var variable = "content";
console.log(visitorName)

// I’m a single line comment
/*
And I’m a multi-lines comment,
Anything in here will be ignored by the Javascript
Interpreter.
var b = 3 + 3
*/
var person1 = {
	name: "foulan",
	age: 9000,
	isStudent: true
}
console.log(person1)

console.log(5+2);
// 7
console.log(7%5);
// 2
console.log(5**2);
// 25
//concatenation
var x = "google";
x += "." + "com"
console.log(x) // prints “google.com”
var name = "Lucy";
console.log(`Yo, ${name}!`) // prints “Yo, Lucy!”
//fonction
function add(a, b) {
	return a + b;
}
console.log(add( 5,2)); // prints 7

/////////
// Function declaration with parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function invocation with argument
greet("John"); // Output: Hello, John!

// Function declaration without parameters
function sayHello() {
    console.log("Hello, world!");
}

// Function invocation without argument
sayHello(); // Output: Hello, world!
