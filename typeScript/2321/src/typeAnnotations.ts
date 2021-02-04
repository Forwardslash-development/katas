// Type annotations

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red','green', 'blue'];
let myNumbers: number[] =[1,2,3,4,5];
let truths: boolean[] =[true,true, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations...
// Functions that return the 'any' type, like JSON.parse.
const json = '{"x": 10, "y": 20}';
const cordinates: {"x": number; "y": number} = JSON.parse(json);
console.log(cordinates);

// when we declare a varible on one line 
// and initalize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i =0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
};

// varibles whose type cannot be inferred
let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;

for (let i =0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}