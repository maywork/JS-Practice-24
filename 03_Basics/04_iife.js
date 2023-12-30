// Immediateky invoked function expressions (IIFE)

// function chai() {
//   console.log(`DB CONNECTED`);
// }

// chai()

// Named IIFE
(function chai() {
  console.log(`DB CONNECTED`);
})(); // not adding semicolon will result in TypeError

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('Mayesha');
