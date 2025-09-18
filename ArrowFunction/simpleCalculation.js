//replacing traditional function method to arrow function
const prompt = require("prompt-sync")();
const a = Number(prompt("enter a number: "));
const b = Number(prompt("enter the second number: "));
const op = prompt("enter a operator: ");
const AddtwoNumbers = () => {
    let c = "" ;
    switch (op){
    case '+':
        c = a+b;
        console.log(c);
    break;
    case '-':
        c =a-b;
       console.log(c);
    break;
    case'*':
       c =a*b;
       console.log(c);
    break;
    case '/':
        c=a/b;
        console.log(c);
    break;
    default:
        console.log("Invalid op");
    }
}
AddtwoNumbers();
