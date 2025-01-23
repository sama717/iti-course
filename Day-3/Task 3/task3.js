var sentence = prompt("Enter a sentence");
var regex = new RegExp( 'e', 'g');
var match = sentence.match(regex);
if (match == null){
    console.log('0');
} else {
console.log(match);
}

// Using a Loop instead 
var sentence2 = prompt("Enter a sentence");
var count = 0;

for (var i = 0; i < sentence2.length; i++){
    if (sentence2[i] == 'e'){
        count++;
    }
}

console.log(count);
