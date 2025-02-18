// const obj1 = {
//     fname: 'Piyush',
//     lname: 'Garg',
//     getFullName: function () {
//         return `${this.fname} ${this.lname}`;
//     }
// };

// const obj2 = {
//     fname: 'Anirudh',
//     lname: 'Jwala'
// };

// console.log(obj1.getFullName); // use obj1.getFullName() not obj1.getFullName to get right answer
// console.log(obj2);

const obj1 = {
    fname: 'Piyush',
    lname: 'Garg',
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    }
};

const obj2 = {
    fname: 'Anirudh',
    lname: 'Jwala',
    getFullName : function () {
        return `${this.fname} ${this.lname}`;
    } // violating dry(Do Not Repeat yourself) principle as i am writing function multiple times...
};

console.log(obj1.getFullName()); // ✅ Call the function to get the full name
console.log(obj1.getFullName.call(obj2)); // ✅ Borrow the method from obj1 to use with obj2

// const obj3 = {
//     fname: 'Piyush',
//     lname: 'Garg',
//     getFullName: function () {
//         return `${this.fname} ${this.lname}`;
//     }
// };

// const obj4 = {
//     fname: 'Anirudh',
//     lname: 'Jwala'
// };

// console.log(obj3.getFullName()); //[Function: getFullName]
// console.log(obj4.getFullName()); //undefined
    