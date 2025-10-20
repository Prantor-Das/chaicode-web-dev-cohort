let myArray = [1,4,2,3,5,6];
let h = myArray.length;

function sumfac(numbers){
    let sum=0;

    for(let i=0; i<h; i++){
        sum = sum + numbers[i];
    }

    return sum;
}

console.log(`Sum of the array is ${sumfac(myArray)}`);
