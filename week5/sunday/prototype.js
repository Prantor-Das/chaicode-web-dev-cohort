//fun start
Object.prototype.chai = function(){
    console.log("chai aur code");
}
const tea = {
    name:"Ice tea lemon",
    type:"cool"
};
tea.chai()

const myTeas = ["lemon tea","orange tea"]
myTeas.chai();
//fun complete

const arr = [1,2,3,4,5,6];

console.log(`\nPolyfills`);
 
//polyfill
//Real signature ko sumjho:- real implementation ko samjho(like kya input,output,format,etc)

//for each

console.log(`\n.forEach`);
const ret = arr.forEach(function(value,index){
    console.log(`Value at Index ${index} is ${value}`)
});
console.log(`Ret is`,ret);

//Real signature ko sumjho:- no return, function input, value, index
//calls my function for every value
//just fot testing .myForEach
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn) {
        const orinalArr = this; //Doubt:- this is current object ki taraf point karta hai

        for(let i=0;i<orinalArr.length;i++) {
            userFn(orinalArr[i],i);
        }
    }
}

console.log(`\n.myForEach`);
const ret1 = arr.myForEach(function(value,index){
    console.log(`Value at Index ${index} is ${value}`)
});
console.log(`Ret is`,ret1);

//map
//Signature :- returns new array, each ele. iterate, userFn
//no cher char to original array
console.log(`\n.map`);
//map can have multiple parameters (e,f,g,h,..) => e*2
const n = arr.map((e,index) => e*2); //in orignal map they give access to index also. 
// If we do not want to change the index we can use:- arr.map((e) => e*2);

// const n = arr.map(function(value,index)) {
//     return value * 2;
// }
console.log(arr);
console.log(n);

//just for testing .myMap
console.log(`\n.myMap`);
if(!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = [];

        for(let i=0;i<this.length;i++) {
            const value = userFn(this[i],i);
            result.push(value);
        }

        return result;
    }
}
const n2 = arr.myMap((e) => e*3);
console.log(arr);
console.log(n2);

//filter
//Signature :- returns new array, input userFn
//agar user ka function True return karta hai toh current value ko new array mein include karta hai
console.log(`\n.filter`);

const n3 = arr.filter ((e) => e%2 == 0);
console.log(n3);

//just for testing .myFilter
console.log(`\n.myFilter`);
if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = [];

        for(let i=0;i<this.length;i++) {
            if(userFn(this[i])) {
                result.push(this[i]);
            }
        }

        return result;
    }
}
const n4 = arr.myFilter((e) => e % 3 == 0);
console.log(arr);
console.log(n4);
