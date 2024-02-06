// basic class
class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

// inheritance
class Teacher extends User {
  constructor(username, email, subject) {
    super(username)
    this.email = email
    this.subject = subject
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher('chai', 'chai@teacher.com', 'psychology')
chai.addCourse()

const masalaChai = new User("Masala Chai")
// console.log(chai === masalaChai);
masalaChai.logMe()
// masalaChai.addCourse()

console.log(chai instanceof User);