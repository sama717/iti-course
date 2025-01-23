var word = prompt("Enter a word");
var lengthOfWord= word.length;

var case1 = confirm('Do you want to ignore case sensitivity?');
if (case1 == true){
    word = word.toLowerCase();
}

for (var i = 0; i < lengthOfWord/2; i++){
    if (word[i]!= word[lengthOfWord - 1 - i]){
        console.log("Not a palindrome");
        return;
    }
}
console.log("Palindrome");
