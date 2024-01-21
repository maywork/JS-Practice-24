// for of

["", "", ""]

let array = [1, 2, 0, 4, 5]

// for (const number of array) {
//   console.log(number);
// }

const greetings = "Hello world!"

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // only sets unique values

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':', value);
}

// const myObj = {
//   'game1': 'NFS',
//   'game2': 'Spiderman'
// } // not iteratable with maps

const myObj = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift: 'swift by apple'
}

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`);
}


const coding = ["js", "ruby", "java", "python", "cpp"]

