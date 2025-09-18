//reverse a string
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


//palindrome or not

const word = prompt("enter a word: ");
function palindrome(){
let reversedWord =[];
for(let i= word.length-1;i>=0;i--){
      reversedWord +=word[i];
    }
    console.log(reversedWord);
    if(word ==reversedWord){
        console.log("palindrome");
    }else{
        console.log("not a palindrome word");
    }
}
palindrome(word);

//captialize first letter of each word

const sentence = "sunday will be a holiday";
const words = sentence.split(" ");
function captilizeWords(){
    for(let i=0;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
   const sent= words.join(" ");
   console.log(sent);
}
console.log(words);
captilizeWords();

//longest word in a string

const Sentence = "I am an enginering student";
const string = Sentence.split(" ");
console.log(string);

function findLongestWord() {
    let longestWord = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i].length > longestWord.length) {
            longestWord = string[i];
        }
    }
    console.log(longestWord);
}

findLongestWord();

//to find number of vowels in string 

const sentence = "I am an enginering student";
function CountVowels(){
let count = 0;
for(let i =0; i <sentence.length;i++){
    if(sentence[i] == 'a'|| sentence[i] == 'e' || sentence[i] == 'i'|| sentence[i] =='o'|| sentence[i] =='u'){
        count ++;
        
    }
    
}
console.log(count);
}
CountVowels(sentence);
