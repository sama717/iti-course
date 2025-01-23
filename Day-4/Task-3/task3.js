var count = prompt("Enter array length");
var arr = [];
for (var i = 0; i < count; i++){
    var num = prompt("Enter number");
    arr[i] = num;
}

console.log("You've entered these values: "+arr);
var ascendingArr = arr.sort(function (num1, num2) { 
    return num1-num2;
});
console.log("Your values in ascending order: " + ascendingArr);

var descendingArr = arr.sort(function (num1, num2) { 
    return num2-num1;
});
console.log("Your values in descending order: " + descendingArr);
