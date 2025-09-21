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
