var c = 3
let a = 1
if (true) {
  let a = 10
  const b = 20
  var c = 30
  console.log("Inner:", a);
}
// let a = 100 // cannot redeclare

var c = 300

console.log(a);
// console.log(b);
console.log(c); // should not have printed outside scope 

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }


function one() {
  const username = "mayesha"

  function two() {
    const website = "youtube"
    console.log(username);
    return website
  }
  return two()
}

// console.log(one());

if (true) {
  const username = "Mayesha"
  if (username === "Mayesha") {
    const website = "youtube"

    console.log(`${username} ${website}`);
  }
  // console.log(website); //outside scope
}

// console.log(username); //outside scope

console.log(addone(10))

function addone(num) {
  return num + 1
}

console.log(addone(5))

// addTwo(5) // Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2
}

console.log(addTwo(5))