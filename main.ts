// Variables can be defined with a type - The variable can then only be assigned values of that type. Otherwise an error is thrown.
var x: number = 10;
var y: string = 'Suh dude';

// For example, the following will display errors in VS Code OR during complie (tsc main.ts)
// x = 'fish';
// y = 5;

// Function parameters can also be defined with a type
var func;
func = (x: number, y: number) => { console.log(`${x} + ${y} = ${x+y}`); return 5;}
func(2,3);

// Function return values can also be defined with a type
func = function () : number { return 5; }

func = () => { return 5; }

interface Suh {
	name: string,
	age: number
}