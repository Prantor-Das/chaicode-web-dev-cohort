let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
// console.log(totalSales);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
// console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUserC = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
console.log(mostActiveUserC);

// Step 1: Find the maximum activity count
let maxActivityCount = Math.max(...userActivity.map(user => user.activityCount));

// Step 2: Filter the user(s) with the maximum activity count
let mostActiveUser = userActivity.filter(user => user.activityCount === maxActivityCount);

console.log(mostActiveUser); // Output: [ { user: 'Alice', activityCount: 45 } ]




// In JavaScript, reduce(), filter(), and map() are powerful array methods that are often used for functional programming tasks. 
// These methods help you work with arrays in a more declarative way. Here's a breakdown of how each one works:

// 1. map()
// The map() method creates a new array by calling a provided function on every element of the array. 
// It's used to transform the elements of the array.
// Syntax:
// const newArray = array.map(callback(element, index, array));
// callback: A function that will be executed on each element of the array.
// element: The current element being processed.
// index: The index of the current element (optional).
// array: The array on which map() was called (optional).
// let numbers = [1, 2, 3, 4, 5];

// // Multiply each number by 2 using map
// let doubledNumbers = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// You can also use arrow functions for conciseness:
// let doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 2. filter()
// The filter() method creates a new array with all elements that pass the test provided by the given function. It's useful for removing elements that don't meet certain criteria.

// Syntax:
// const newArray = array.filter(callback(element, index, array));
// callback: A function that tests each element.
// element: The current element being processed.
// index: The index of the current element (optional).
// array: The array on which filter() was called (optional).
// Example:
// let numbers = [1, 2, 3, 4, 5];

// // Filter out only the even numbers
// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// console.log(evenNumbers); // [2, 4]

// Using arrow functions:

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]

// 3. reduce()
// The reduce() method executes a reducer function (callback) on each element of the array, resulting in a single output value. It's often used to accumulate values, such as summing up numbers, or transforming an array into an object.

// Syntax:
// const result = array.reduce(callback(accumulator, element, index, array), initialValue);
// callback: A function that will be applied to each element.
// accumulator: The accumulated value (starts with initialValue).
// element: The current element being processed.
// index: The index of the current element (optional).
// array: The array on which reduce() was called (optional).
// initialValue: The initial value for the accumulator (optional).

// Example (sum of numbers):
// let numbers = [1, 2, 3, 4, 5];

// // Sum all numbers
// let sum = numbers.reduce(function(accumulator, num) {
//     return accumulator + num;
// }, 0); // Initial value of accumulator is 0

// console.log(sum); // 15


// Using arrow functions:

// let sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
// console.log(sum); // 15

// Example (flattening an array):

// reduce() can also be used for more complex operations, like flattening an array of arrays:
// let arrays = [[1, 2], [3, 4], [5]];

// // Flatten the array
// let flattened = arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);
// console.log(flattened); // [1, 2, 3, 4, 5]

// Summary of Differences:
// map(): Transforms each element of the array and returns a new array of the transformed values.
// filter(): Filters out elements based on a condition and returns a new array containing only the elements that satisfy the condition.
// reduce(): Reduces an array to a single value based on an accumulator.


// Example Using All Three Methods Together:
// let numbers = [1, 2, 3, 4, 5, 6];

// // First, double the numbers, then filter for numbers greater than 5, and finally sum them up.
// let result = numbers
//     .map(num => num * 2)      // Double the numbers
//     .filter(num => num > 5)   // Keep only numbers greater than 5
//     .reduce((acc, num) => acc + num, 0); // Sum the remaining numbers

// console.log(result); // 24 (6 + 8 + 10)

// In this example:

// map() doubles each number.
// filter() keeps only the numbers greater than 5.
// reduce() sums up the filtered numbers.
