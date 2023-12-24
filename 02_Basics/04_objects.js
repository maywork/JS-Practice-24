
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Mayesha",
      lastname: "Fairuz"
    }
  }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname.lastname);

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

// const obj3 = { obj1, obj2 }
// console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);
const obj5 = { ...obj1, ...obj2 }
console.log(obj5);

const users = [
  {
    id: 1,
    email: "m@email.com",
  },
  {
    id: 2,
    email: "f@email.com",
  },
  {
    id: 3,
    email: "j@email.com",
  },
  {
    id: 4,
    email: "k@email.com",
  },
]

// console.log(users[1].email);
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));
console.log(tinderUser.hasOwnProperty('isLogged'));