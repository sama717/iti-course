function fizzBuzz (num){
    if (num%3==0 && num%5==0){
        console.log("FizzBuzz");
    } else if (num%5==0){
        console.log("Buzz");
    } else if(num%3==0){
        console.log("Fizz");
    } else{
        console.log("Not divisible by 3 or 5");
    }
}

var input = prompt("Enter a number");
fizzBuzz(input);

