const user = {
  username: 'May',
  loginCount: 8,
  signedIn: false,

  getUserDetails: function () {
    // console.log("Got user deets from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  }
}

const user2 = {
  username: 'Mayesha',
  loginCount: 12,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user deets from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails()); // need to run as it's a method

// console.log(this);


// ++++++++++++ Constructor Function ++++++++++++

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  }

  // return this // happens implicitly
}

const userOne = new User("May", 12, true)
const userTwo = new User("Ray", 14, false)

// console.log(userOne);
console.log(userOne.constructor);
console.log(userOne instanceof User);
// console.log(userTwo);
console.log(userTwo.constructor);
console.log(userTwo instanceof User);


// whenever new keyword is used -> an empty obj is created -> called 'Instance'
// -- New Obj
// -- Constructor function is called via 'new'
// -- Arguments are injected in current context
// -- Get results!

