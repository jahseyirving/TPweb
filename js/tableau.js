v// Declaring an array called storage containing 3 items of different types:
var storage = [ 1, 'Monday', null ];
// Accessing elements 
console.log(storage[0]); // prints 1
console.log(storage[6]); // prints undefined
// Array length
console.log(storage.length) // prints 3

/* 
.push ajoute des éléments à la fin du tableau.
.unshift ajoute des éléments au début du tableau.
. pop supprime le dernier élément du tableau et le renvoie.
.shift supprime le premier élément du tableau et le renvoie. */

//ajout retrait tableau

var days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days); 
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

days.push( 'Saturday' );
console.log(days); 
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

days.unshift( 'Sunday' ); 
console.log(days); 
// prints ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]



/////supprimer avec  index
var days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days);
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

delete days[2];
console.log(days); 
// prints ['Monday', 'Tuesday', undefined, 'Thursday', 'Friday']

days[2] = 'Wednesday';
console.log(days); 
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

delete days[7];
console.log(days);
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']


////

// Initializing an object literal with curly brackets
var objectLiteral = {};

// Initializing an object constructor with new Object
var objectConstructor = new Object();







