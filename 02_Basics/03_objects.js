// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Mayesha",
  "full name": "Mayesha Fairuz",
  [mySym]: "myKey1",
  age: 18,
  location: "Dhaka",
  email: "may@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturnday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// Object.freeze(JsUser)
// JsUser.email = "mfg@cpt"
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());