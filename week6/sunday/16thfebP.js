Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`); //this.name is the name of the function
};

function greet(name) {    //name is the parameter here
    return `Hello ${name}`
}

// console.log(greet("ashirwad").describe()); //greet(...).describe is not a function

greet.describe('hitesh'); //output => 'Function name is greet  ''hitesh'is an argument '
console.log(greet("Prantor")); //output => 'Hello Prantor'

function add(a,b) {
    return a+b;
}   //function declaration

// baki 2 types from chat gpt Function Expression and Arrow Function; 

// first class function
function applyOperation(a,b,operation){
    return operation(a,b);
}
const result = applyOperation(5,4,(x,y)=>x/y)
//

function createCounter(){  
    let count = 0;
    return function(){ //tiffin concept : access parent variable
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter());
// console.log(count()); //count is not accessable


function onrf() {
    let myName = "hitesh"  //limitesd scope of myName. once function ends myName scope also end
}


//Immediately Invoked Function Expression (IIFE).
// (function(){    //wrapping a function. Calling immediately
//     console.log("hitesh");
// })()

// ()()

(function(){
    console.log("Hello, World!");
})();
//