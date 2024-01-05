// truthy & falsy values

// const userEmail = 'h@hitesh.ai'
// const userEmail = []
const userEmail = ""

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy
// false, 0, -0, BigInt (0n), "", null, undefined, NaN
// Everything else is truthy

// truthy values
// "0", 'false', " ", [], {}, function(){} // empty function


if (userEmail.length === 0) { // true
  console.log(userEmail.length);
}

const emptyObj = {}

if (Object.keys(emptyObj.length === 0)) { // true
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 100


console.log(val1);

// Terniary 
// condition ? true : false

const iceTeaPrice = 75
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");