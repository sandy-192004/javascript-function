const prompt = require("prompt-sync")();
const array= prompt("enter a array of numbers: ");
console.log(array);
const number = array.split(" ")
console.log(number);

const evenNumbers = number.filter(num => (num) % 2 === 0);
console.log( evenNumbers);
