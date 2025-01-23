//Variables
var num = document.getElementById("num");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var arrayInput = document.getElementById("array");
var arrayOutput = document.getElementById("arrayOutput");

var sent = document.getElementById("text")
var sentenceOutput = document.getElementById("sentence")


//Task 1
function lights(){
    var text = Number(num.value);

    red.style.backgroundColor = "gray";
    yellow.style.backgroundColor = "gray";
    green.style.backgroundColor = "gray";

    if (text === 1){
        red.style.backgroundColor = "#D20A2E";
    } else if (text === 2){
        yellow.style.backgroundColor = "#ECC846";
    } else if (text === 3){
        green.style.backgroundColor = "#32936F";
    } else {
        console.log("Invalid Input");
    }
}

//Task 2
function array() {
    var text2 = arrayInput.value;
    var newArray = text2.split(" ");
    arrayOutput.innerHTML = ""; 

    if (newArray.length === 0 || text2 === "") {
        console.log("Invalid Input");
        return; 
    } else {
        for (var i = 0; i < newArray.length; i++) {
            newArray[i] = Number(newArray[i]); 
        }

        var ascendingArr = newArray.sort(function (num1, num2) { 
            return num1 - num2;
        });

        arrayOutput.innerHTML = "Second smallest number is " + ascendingArr[1] + ", Second largest number is " + ascendingArr[ascendingArr.length - 2];
    }
}



//Task 3
function sentence(){
    var text3 = sent.value;
    sentenceOutput.innerHTML = "";

    if (isNaN(text3)){
        var textArray = text3.split(" ");
        for (var i = 0; i < textArray.length; i++){
            textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
        }
        //console.log(textArray.join(" "));
        // sentenceOutput.style.textTransform = "capitalize";
        sentenceOutput.innerHTML = textArray.join(" ");
    } else {
        console.log("Invalid Input");
    }
}