const prompt = require("prompt-sync")();
// let String = prompt("enter a string: ");
// let string = [];
// function reverseString(){
//     for(let i = String.length - 1; i >= 0; i--){
//         string += (String[i]);
// }
//     console.log(string);
// }
// reverseString();


//palindrome or not
// const word = prompt("enter a word: ");
// let reversedWord =[];
// for(let i= word.length-1;i>=0;i--){
//       reversedWord +=word[i];
//     }
//     console.log(reversedWord);
//     if(word ==reversedWord){
//         console.log("palindrome");
//     }else{
//         console.log("not a palindrome word");
//     }

//captialize first letter of each word

// const sentence = "sunday will be a holiday";
// const words = sentence.split(" ");
// function captilizeWords(){
//     for(let i=0;i<words.length;i++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//    const sent= words.join(" ");
//    console.log(sent);
// }
// console.log(words);
// captilizeWords();

//longest word in a string

const String ="mern stack development";
const words = String.split(" ");
let longest = "";
for(let i=0;i<words.length;i++){
    if(words[i].length > longest.length){   
        longest = words[i];
    }  
}
