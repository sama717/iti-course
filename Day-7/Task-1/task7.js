
function param (a,b){
    try{
    if (arguments.length !== 2){
        throw new Error("Invalid number of arguments");
    } else {
        console.log(`The parameters are ${a} and ${b}`);
    }
} catch(error){
    console.log(error);
}
}
function addNumbers(count) {
    try {
      if (count <= 0) {
        throw new Error("Invalid count");
      }
  
      var arr = [];
      for (var i = 0; i < count; i++) {
        var input = prompt("Enter number");
        var number = Number(input);
  
        if (isNaN(number)) {
          throw new Error("parameter must be a number.");
        }
        arr.push(number);
      }
  
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
  
      console.log(sum); 
    } catch (error) {
      console.log(error.message);
    }
  }  

var input = prompt("Enter a count");

param (2,3);
param (2,3,4);

addNumbers(input);
