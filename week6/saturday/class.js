class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;

        //define properties
        //we can have n number of properties
        //we cannot have different constructors in JS
        
    }

    getFullname() {  // Moved inside the class
        return `${this.fname} ${this.lname}`;
    }
}


//class is
//Here let Person be a object like 
//const Person = {
    // getFullName: function () {
    //          return `${this.fname} ${this.lname}`;
    // }
//};
//p1.__proto__=Person.prototype
//it is a syntax sugar


const p1 = new Person('Piyush', 'Garg');
const p2 = new Person('Akash', 'Kadlag');

console.log(p1.getFullname()); // Output: Piyush Garg
console.log(p2.getFullname()); // Output: Akash Kadlag
