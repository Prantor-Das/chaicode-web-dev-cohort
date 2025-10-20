const teas = ["Green teas","Black teas","Oolong Tea","Herbal Tea"];
console.log(teas);

teas.push("Chamomile Tea");
console.log(teas);

const index = teas.indexOf("Oolong Tea");
if(index > -1) {
    teas.splice(index, 1);
}
console.log(teas);

// teas.filter(tea => tea !== "Herbal Tea");
const caffinatedTeas = teas.filter(tea => tea !== "Herbal Tea");

console.log(teas.sort());

for(let i=0 ; i<teas.length; i++){
    console.log(teas[i]);
}

let caffinatedMyTeas = 0;
for(let i =0; i<teas.length; i++) {
    if(teas[i] != "Herbal Teas"){
        caffinatedMyTeas++;
    }
}

const uppercaseTeas = [];
for(let i =0; i<teas.length; i++){
    uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);

let longestTea = "";
longestTea=teas[0];
for(let i=0;i<teas.length;i++){
    if(teas[i].length > longestTea){
        longestTea = teas[i];
    }
}
console.log(longestTea);

const reverseArray = [];
for(let i = teas.length-1 ; i>=0 ; i--){
    reverseArray.push(teas[i]);
}
console.log("Reverse Array:\t",reverseArray);