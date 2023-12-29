const user = {
  username: "mayesha",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  }

}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username = "May"
//   console.log(this.username); // undefined
// }

// chai()

// const chai = function chai() {
//   let username = "May"
//   console.log(this.username); // undefined
// }
// chai()

// const chai = () => {
//   let username = "May"
//   console.log(this); // {}
//   console.log(this.username); // undefined
// }
// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2 // explicit return
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // implicit return

// const addTwo = (num1, num2) => {username: "May"} // undefined
const addTwo = (num1, num2) => ({ username: "May" })

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()