const prompt = require("prompt-sync")();
let String = prompt("enter a string: ");
let string = [];
function reverseString(){
    for(let i = String.length - 1; i >= 0; i--){
        string += (String[i]);
}
    console.log(string);
}
reverseString();
