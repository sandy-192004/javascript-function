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