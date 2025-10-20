function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Hitesh");
// greet("Piyush");

let globalVar = "I am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped"; 
  console.log(blockScopedVar);
}

modifyGlobal();

let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();

//IIFE:- function used only one times(USE AND THROW FUNCTION)
// (()=>{})()
//IIFE (Immediately Invoked Function Expression) in JavaScript
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined.
//  It is often used to avoid polluting the global scope.

//Syntax of IIFE
// (function() {
//   console.log("IIFE function executed!");
// })();

// ✔ Explanation:
// 	•	The function is wrapped in parentheses: (function() { ... })
// 	•	It is immediately invoked with ();



let person1 = {
  personsName: "ravi",
  greet: function () {
    console.log(`Hello, ${this.personsName}`);
  },
};
//function did not know from where personName came for,
//so this is used to give context to personName
//this points to current context

//this is used to define the context of the variable

let person2 = {
  personsName: "hitesh",
};

person1.greet.call(person2);
//.call() is used to pass context, modify the context of function
//not used .bind bcz. it returns a new function

const bindGreet = person1.greet.bind(person2);
//console.log(bindGreet) //Output [Function: bound greet]
bindGreet();

//Difference Between call(), apply(), and bind() in JavaScript
//All three methods—call(), apply(), and bind()—are used to set the value of this in a function.
//The difference lies in how they pass arguments and when the function is executed.

//1. call()
//	•	Invokes the function immediately.
//	•	Passes arguments one by one.
// Example:
// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Hitesh" };

// greet.call(person, "Hello", "!"); 


// Output:
// Hello, Hitesh!
// call() explicitly sets this to person and passes "Hello" and "!" as arguments.

// 2. apply()
// 	•	Invokes the function immediately.
// 	•	Passes arguments as an array.

// Example:
// greet.apply(person, ["Hi", "!!"]);

// Output:
// Hi, Hitesh!!
// apply() is the same as call(), but it takes arguments as an array.

// 3. bind()
// 	•	Does NOT invoke the function immediately.
// 	•	Returns a new function with this bound to the given object.
// 	•	Arguments can be pre-set (partial application).

// Example:
// const boundGreet = greet.bind(person, "Hey");
// boundGreet("!!!");  // Now we call the function separately

// Output:
// Hey, Hitesh!!!
// bind() returns a new function that remembers this = person and "Hey" as the first argument.

// Method        Executes Immediately      How Arguments Are Passed
// call()               Yes                  Individually (comma-separated)
// apply()              Yes                  As an array
// bind()    No (Returns a new function)     Individually
