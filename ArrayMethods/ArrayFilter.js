const prompt = require("prompt-sync")();
const numbers = prompt("enter a numbers: ");
const array = numbers.split(" ");
console.log(array);

const greaterNumber = array.filter(greaterNumber => {
    return(greaterNumber >= 10);
})
console.log(greaterNumber);