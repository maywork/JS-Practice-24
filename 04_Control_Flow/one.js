// if

// if (false) {
//   // won't execute
// }
// if (true) {
//   // will execute
// }

// if (2 == 2) {
//   // will execute
// }

// const isLoggedIn = true
// if (isLoggedIn) {
//   // will execute
// }

if (2 == '2') {
  console.log("executed");
}

// if (2 === '2') {
//   console.log("not executed");
// }

if (2 !== '2') {
  console.log("not executed");
}

const temperature = 20

if (temperature === 50) {
  console.log("temperature is 50");
} else {
  console.log("temperature is greater than 50");
}


const score = 200
if (score > 100) {
  const power = 'fly'
  console.log(`User power: ${power}`);
}