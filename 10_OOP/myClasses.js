// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}007`
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai = new User('chai', 'chai@yt.com', 'chaiAurCode')

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}007`
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}

const tea = new User('tea', 'tea@yt.com', 'teaAurCode')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());