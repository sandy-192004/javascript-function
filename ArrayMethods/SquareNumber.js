const prompt = require("prompt-sync")();
const number = prompt("enter a number:");
const square = number.split(" ");
console.log(square);

const NumberSquare = square.map(NumberSquare =>{
    return NumberSquare*NumberSquare;
})
console.log("the square of a number is : "+ NumberSquare);