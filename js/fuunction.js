//The if Statement
// 1_Defining the function

function checkIfNumber( x ){
    if ( typeof x === 'number' ){
        console.log( x + ' is a number.' ); 
    }
}

// 2_Calling the function

checkIfNumber(5) // prints “5 is a number.”

checkIfNumber("5") // doesn't do anything, “5” was passed here as a string (non-numeric value).

checkIfNumber() // doesn’t do anything, no argument was passed to the function
///////



////else if satement
// 1_Defining the function

function decodeColor( code ) {
    if ( code === 1 ) {
        console.log( 'Red' );
    } else if ( code === 2 ) {
        console.log( 'Yellow' );
    } else if ( code === 3 ) {
        console.log( 'Green' );
    } else {
        console.log( 'Unknown code' );
    }
}
// 2_Calling the function

decodeColor(1) // prints Red

decodeColor(2) // prints Yellow

decodeColor(3) // prints Green

decodeColor('blah') // prints Unknown code



//La déclaration de commutation SWITCH

// 1_Defining the function

function decodeColor( code ) {
    switch( code) {
	case 1:
		console.log( 'Red' );
		break;
	case 2:
		console.log( 'Yellow' );
		break;
	case "x":
		console.log( 'Green' );
		break;
	default:
		console.log( 'Unknown code' );
	}
}
                
// 2_Calling the function

decodeColor(1) // prints Red

decodeColor(2) // prints Yellow

decodeColor("x") // prints Green

decodeColor(3) // prints Unknown code

// Let’s sum the values of a small array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

var sum = 0;
var i = 0;
while ( i < numbers.length ) {
    sum += numbers[i];
    i += 1;
}
console.log( 'The loop was executed ' + i + ' times' );
// prints The loop was executed 10 times

console.log(sum);
// prints 115
///
// Let’s sum the values of a small array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
var sum = 0;

// Using the for… in loop
for ( var i in numbers) {
    sum += numbers[i];
}

console.log(sum)
// prints 115
// Let’s sum the values of a small array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
var sum = 0;

// Using the for… of loop
for ( var value of numbers) {
    sum += value;
}
console.log(sum)
// prints 115


////objet


//  Initializing a gimli object
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};
console.log(gimli)
// prints {name:"Gimli", race:"dwarf", weapon:"axe", greet:f greet {...}}
// PS: This output may render differently depending 
//on what console you are using, but you should notice that all of the values passed to the object are shown in the output.
//  Initializing a gimli object
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

// Adding a new age property to gimli using the dot notation
gimli.age = 139;

// Adding new age property to gimli using the dot notation
gimli["age"] = 139;
// Adding a new fight method to gimli
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
}

console.log(gimli)
// prints {name: "Gimli", race: "dwarf", weapon: "axe", age: 139, greet: ƒ, fight: ƒ}

// Calling the newly created method fight
console.log(gimli.fight());
// prints "Gimli attacks with an axe."

// Updating weapon from axe to battle axe
gimli.weapon = "epic battle axe";

// Calling the previously created method fight AGAIN
console.log(gimli.fight());
// prints "Gimli attacks with an epic battle axe."


var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
 };
 gimli.age = 200;
 //  Initializing a gimli object
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

// Removing weapon from gimli
delete gimli.weapon; // Output: true
// We can test the output of gimli to see if it succeeded.
console.log(gimli);
// prints {name: "Gimli", race: "dwarf", greet: ƒ }












