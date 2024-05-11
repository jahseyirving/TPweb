
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
// Example 1: (Classic Function Declaration)
function cube(n){    
    return n*n*n; 
    }
    
// Example 2: (Function Expression)
    var cube = function(n){    
    return n*n*n; 
    }
//Paramètres de fonction
var add = function( a, b ) {
    return a + b;
}

console.log(add(0,1)) // prints 1
console.log(add()) // prints NaN

var add = function( a = 0, b = 1 ) {
    return a + b;
}
//Fonctions d'appel et instruction de retour
// 1_Defining some functions

function add( a, b ){
    return a+b;
  }
  
  var subtract=function( a, b ) {
    return a-b;
  }
  
  var multiply=function( a, b ) {
    a*b; // notice the absence of “return” here
  }
  
  // 2_Calling the predefined functions
  
  add(2, 3) // returns 5
  
  subtract(2, 3) // returns -1
  
  multiply(2, 3) // returns undefined