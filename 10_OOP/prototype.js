// let myName = 'Hridula     '
// let myGoal = 'Software Developer     '

// myName.trueLength();


let myHeros = ['thor', 'spiderman']

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function () {
    console.log(`Spidy power can ${this.spiderman}`);
  }
}

Object.prototype.hridu = function () {
  console.log(`hridu is present in all objects`);
}

Array.prototype.heyHridu = function () {
  console.log(`Hridu learns about prototypical inheritance`);
}

// heroPower.hridu()
// myHeros.hridu()
// myHeros.heyHridu()
// heroPower.heyHridu() // TypeError: heroPower.heyHridu is not a function

// inheritance

const User = {
  name: 'chai',
  email: 'chai@google.com'
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

// outdated syntax of prototypal inheritance
const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

// console.log(TASupport.isAvailable); // prints false

Teacher.__proto__ = User
// console.log(Teacher.name); // prints chai

// modern syntax of prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "ChaiAurCode        "

String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUser.trueLength()

let myName = 'Hridula     '
let myGoal = 'Software Developer     '

myName.trueLength();
myGoal.trueLength();
"Hridulalala".trueLength()