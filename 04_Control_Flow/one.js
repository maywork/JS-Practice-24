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


// const score = 200
// if (score > 100) {
//   const power = 'fly'
//   console.log(`User power: ${power}`);
// }


// shorthand notation

// const balance = 1000
// if (balance > 500) console.log("test"), // bad practice
//   console.log("test 2"),
//   console.log("test 3")

// if (balance < 500) {
//   console.log('less than 500');
// } else if (balance < 750) {
//   console.log('less than 750');
// } else if (balance < 900) {
//   console.log('less than 900');
// } else {
//   console.log('less than 1500');
// }


const userLoggedIn = true
const loggedInFromGoogle = false
const loggedInFromEmail = false
const debitCard = true

if (userLoggedIn && debitCard) {
  console.log("Allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}