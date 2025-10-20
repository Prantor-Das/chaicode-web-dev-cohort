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

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
// console.log(mostActiveUser);

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense.amount;
    //this code is dynamic

    return report;
  },
  { Food: 0, Utilities: 0 }
);
//.reduce returns data type of accumulator itself
//if { Food: , Utilities:  } not initialized then { Food: NaN, Utilities: NaN }
//this code is not dynamic

console.log("Expense Report", expenseReport);

console.log("\n");

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);
//tasks
// .filter() accepts callback function
// .sort();

console.log(pendingSortedTasks);

console.log("\n");

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  //   movie.ratings = average;
  //   return movie;
  return { title: movie.title, ratings: average.toFixed(2) };
});

// wrong approach to console.log
// console.log(`Average movie rating is:-
//   ${averageRatings}`);

// console.log(movieRatings);

// Corrected console log
console.log(`Average movie ratings:\n${JSON.stringify(averageRatings, null, 2)}`);

//${} (Template Literal Interpolation)
//	•	It allows inserting variables inside a string.

// JSON.stringify(averageRatings, null, 2)
//	•	Converts averageRatings (an array of objects) into a formatted JSON string.
//	•	The null is a replacer function (not used here).
//	•	The 2 means indentation of 2 spaces for better readability.




//Return that I need
[{ title: "Movie A", ratings: 3.3 }, {}];
