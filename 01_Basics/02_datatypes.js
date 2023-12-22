let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber2);
// console.table([score, score1, score2, score3, score4]);

// Primitive
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 32546456464656546n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Iron man", "spiderman", "black widow"]

let myObj = {
  name: "May",
  age: 22,
}

const myFunction = function () {
  console.log("Hello world");
}

console.table([typeof bigNumber, typeof heros, typeof id, typeof outsideTemp, typeof userEmail]);