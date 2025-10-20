const obj = {
    personName: "Akash",
    greet: function(){
        console.log(`Hello, ${this.personName}`);
    },
};

obj.greet(); // ye chalta hai
//Par
setTimeout(obj.greet, 5*1000); //context is lost till it reach call stack so output is Hello, undefined
//thik karne k liye
setTimeout(obj.greet.bind(obj), 5*1000); // binding the context along with the code so that context is not lost till it reach call stack


setTimeout(() => console.log("Hello after 0's"), 0); //TASK QUEUE

Promise.resolve().then(() => console.log('Promise Resolve Hogya')); //MICRO TASK QUEUE

//PRIORITY OF MICRO TASK QUEUE > TASK QUEUE

setTimeout(() => console.log("Hello after 0's"), 0);

