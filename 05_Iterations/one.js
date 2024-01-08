// for loop

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element == 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}

// console.log(element); // out of scope

// for (let index = 0; index <= 2; index++) {
//   console.log(`Outer loop value: ${index}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`Inner loop value: ${j} and inner loop index: ${index}`);
//   }
// }

// table printing

// for (let index = 1; index <= 10; index++) {
//   console.log(`Outer loop value: ${index}`);
//   for (let j = 1; j < array.length; j++) {
//     console.log(`${index} * ${j} = ${index * j}`);
//   }

// }

let myArray = ["batman", "flash", "ironman", "spiderman", "dr. strange"]

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

console.log(`example of break`);

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`value of i is ${index}`);

}

console.log(`example of continue`);

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`value of i is ${index}`);

}