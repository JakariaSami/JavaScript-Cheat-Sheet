let Fname: string = "John";
let Lname = "Doe"  // Infer, TypeScript will guess the type.

// Fname = 20; this will produce error

let isLoggedIn: boolean = true
let age: number

let a: any = false
a = 'something' // due to 'any' it won't produce error

const names: string[] = [];
names.push("John"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const cars: readonly string[] = ["toyota"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push("2"); // Will produce error


// A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple = [false, 'Coding God was mistaken', 5]; // Will produce error

const graph: [x: number, y: number] = [55.2, 41.3]; // Named tuples
const graphs: [number, number] = [55.2, 41.3];
const [x, y] = graph; // Destructuring


// Objects
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

const phone = {
  type: "android",
};
phone.type = 10 // Inference error

const brand: { type: string, mileage: number } = { // Error: Property 'mileage' is missing.
  type: "Toyota",
};
brand.mileage = 2000;

const brands: { type: string, mileage?: number } = { // no error cause mileage is optional.
  type: "Toyota"
};
brands.mileage = 2000;


// Union types
function printStatusCode(code: string | number) { // String or Number is valid
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

function printStatusCodes(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'number'
}


// Function return types
function getTime(): number { // returns Number
  return new Date().getTime();
}

function printHello(): void { // doesn't return anything.
  console.log('Hello!');
}

function multiply(a: number, b: number) {
  return a * b;
}
function add(a: number = 10, b: number, c?: number) { // 'c' is optional, a has default value
  return a + b + (c || 0);
}

function added(a: number, b: number, ...rest: number[]) { // Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
  return a + b + rest.reduce((p, c) => p + c, 0);
}
