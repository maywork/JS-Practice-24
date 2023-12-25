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
  if (!username) {
    return ("Please enter a username")
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("May"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1) {
  return num1
}
console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(val1, val2, ...num1) {
  return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
  username: "mayesha",
  price: 199
  // prices: 199
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} & price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 500, 1000]));