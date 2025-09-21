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