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
