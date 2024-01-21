// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach((item) => {
//   console.log(`${item} is being printed`);
//   // return item // forEach doesn't return anything
// })

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums); // filter returns filtered value(s)

// const newNums = []

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// })

// console.log(newNums);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1981, edition: 2007 },
  { title: 'Book Three', genre: 'History', publish: 2001, edition: 2010 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 2003, edition: 2007 },
  { title: 'Book Five', genre: 'Science', publish: 1972, edition: 2008 },
  { title: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2014 },
  { title: 'Book Seven', genre: 'Non-Fiction', publish: 1991, edition: 2009 },
  { title: 'Book Eight', genre: 'History', publish: 2010, edition: 2022 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 2010 }
];

// const userBooks = books.filter((book) => book.genre === 'History')
const userBooks = books.filter((book) => book.publish >= 1995 && book.genre === 'History')

// console.log(userBooks);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const mynewNums = myNumers.map((num) => { return num + 10 })

const mynewNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)

// console.log(mynewNums);

const array1 = [1, 2, 3, 4];

const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue
// );

// const sumWithInitial = array1.reduce(function
//   (accumulator, currentValue) {
//   console.log(`accumulator: ${accumulator} & current value: ${currentValue}`);
//   return accumulator + currentValue
// }, initialValue
// );

// console.log(sumWithInitial);

// const myTotal = myNums.reduce((acc, curr) => (acc + curr), 0)

const shoppingCart = [
  {
    itemName: 'js course',
    price: 2999
  },
  {
    itemName: 'python course',
    price: 999
  },
  {
    itemName: 'mobile dev course',
    price: 5999
  },
  {
    itemName: 'data science',
    price: 12999
  },
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);