class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `${this.username}${Math.floor((Math.random()) * 100)}`
  }
}

const May = new User("Mayesha")
// console.log(May.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const iphone = new Teacher('iPhone', 'i@phone.com')
iphone.logMe()
console.log(iphone.createId())