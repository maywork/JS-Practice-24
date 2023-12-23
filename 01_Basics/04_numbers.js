const score = 500

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.89665
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('bn-BD'));


// +++++++++++++ Maths +++++++++++++
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 7));
// console.log((Math.random() * 10) + 1);
// console.log(Math.random());

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)