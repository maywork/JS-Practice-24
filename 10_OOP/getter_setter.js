class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value
  }

  get password() {
    return this._password.toUpperCase()
  }
  set password(value) {
    this._password = value
    // this._password = value.toUpperCase()
  }
}

const mayesha = new User('m@yesha.com', '123abc')
console.log(mayesha.email);
console.log(mayesha.password);


// older methods to set

// get & set using Object
// const User = {
//   _email: 'm@mf.com',
//   _password: 'abc',

//   get email() {
//     return this._email.toUpperCase()
//   },
//   set email(value) {
//     this._email = value
//   }
// }

// const tea = Object.create(User)
// console.log(tea.email);