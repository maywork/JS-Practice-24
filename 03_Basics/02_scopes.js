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

for (let i = 0; i < array.length; i++) {
  const element = array[i];

}