const prompt = require("prompt-sync")();
const numbers = prompt("enter the numbers: ");
const array = numbers.split(" ");
console.log(array);

const FilterOddNumber = array.map(FilterOddNumber => {
   
        if(FilterOddNumber%2 != 0){
            odd = FilterOddNumber;
            Odd = odd * odd;
            console.log("the square of odd number " + FilterOddNumber + " is :" +Odd);
        }
    
    }
)
