function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("Y");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
  // let result = (number1 + number2);
  // return result
  return number1 + number2
}

// addTwoNumbers(1, 2)
// addTwoNumbers(1, "2")
// addTwoNumbers(1, "a")
addTwoNumbers(1, null)


const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username) {
  if (username === undefined) {
    return ("Please enter a username")
  }
  return `${username} just logged in`
}

console.log(loginUserMessage("May"))
console.log(loginUserMessage())