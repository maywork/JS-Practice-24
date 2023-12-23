// console.log("Hello" + " " + "world"); // bad

let name = "May"
let repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Mayesha-mc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 6)
console.log(anotherString);

const newStringOne = "      Mayesha      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mayesha%20fairuz%20ridula"
console.log(url.replace('%20', '-'));
console.log(url.replaceAll('%20', '-'));

console.log(url.includes('ayesha'));

console.log(gameName.split('-'));
