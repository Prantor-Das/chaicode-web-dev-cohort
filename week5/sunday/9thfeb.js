const teas = {
    name : "Lemon Tea",
    type : "Green",
    caffine : "low"
}

console.log(teas.name);
console.log(teas["type"]);

teas.origin = "Assam";

teas.caffine = "Medium";

delete teas.type;

console.log("origin" in teas);

for (let key in teas) {
    console.log(key + ":" + teas[key]);
}

const myTeas = {
    greentea : {
        name : "Green Tea",
        cups : {
            one : "1",
            two : "2"
        },
    },
    blacktea : {
        name : "Black Tea"
    }
}

const teaCopy = {...teas}; //shallow copy
const anotherCopy = teas; // just a normal copy here just the reference is copied
console.log(teaCopy);

const teaCopy1 = {...myTeas}; 
const anotherCopy1 = myTeas;
console.log(teaCopy1);
teaCopy1.greentea.cups.one = 4
console.log(teaCopy1);
console.log(myTeas);

// Serialization (Object → JSON String)
let jsonString = JSON.stringify(teas);
console.log(jsonString); 

// Deserialization (JSON String → Object)
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name);

teaCopy.greentea.cups.one=4
console.log(teaCopy);
console.log(myTeas);

