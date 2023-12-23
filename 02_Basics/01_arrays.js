// array

const myArr = [0, 1, 2, 3, 4, 5]
// JavaScript arrays are resizable and can contain a mix of different data types

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// console.log(myArr);
// console.log(myArr.includes(9));

myArr.shift()
myArr.unshift(9)
// console.log(myArr.indexOf(5));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice
console.log("A ", myArr);

const mySlice = myArr.slice(1, 3)

console.log(mySlice);
console.log("B ", myArr);

const mySplice = myArr.splice(1, 3)
console.log(mySplice);
console.log("C ", myArr);