let numberofGuest = 4;

let pizzaSize;

if(numberofGuest <= 2){
    pizzaSize = "small";
} else if (numberofGuest <= 5){
    pizzaSize = "medium";
} else {
    pizzaSize = "large";
}

console.log(pizzaSize);
