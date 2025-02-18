// const x = 10;
// console.log(x);
const person = {
    // x : 10, here x is key and 10 is the value
    x:10,
    firstName : 'Piyush',
    lastName : 'Garg',
    hobbies : ['coding','gym'],
    isMarried : false,
    getfullName: function() {
        return 'Piyush Garg'
    },
    address: {
        hno:1,
        street:1,
        countryCode: 'IN',
        state : 'PB'
    }
}
console.log(person.address.countryCode);

const remote = {
    color : 'black' ,
    brand : 'XYZ' ,
    dimensions : { height: 1, width: 1},
    turnOff: function() {
        return 'Off'
    }
}

let p1 = {
    fname: 'Hitesh',
    lname: 'Ch',
    address: {
        name: 'Prr'
    }
}
let p2 = {
    fname: p1.fname,
    lname: p1.lname
}
console.log(p1);
console.log(p2);

p2.fname = 'Piyush'
p2.lname = 'Das'
console.log(p1);
console.log(p2);
console.log("...............................................");
//shallow copy
let p3 = {
    ...p1
}
console.log(p3);
p3.address.name = "Prantor";
console.log(p1);
console.log(p3);
console.log("...............................................");

//deep copy
//converting to string
const p1KaString = JSON.stringify(p1); //Serialization
console.log(p1KaString);
p4 = JSON.parse(p1KaString); //Deserialization
