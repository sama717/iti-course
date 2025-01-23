
function equations(sum, mul, divison, a, b, c){
    sum(a,b,c);
    mul(a,b,c);
    divison(a,b,c);
}

var a = prompt("Enter first number");
var b = prompt("Enter second number");
var c = prompt("Enter third number");

a = Number(a);
b = Number(b);
c = Number(c);

equations(
        function (a,b,c){
            console.log("Sum of numbers: " + (a+b+c));
         }, 
         function (a,b,c){
             console.log("Mul of numbers: " + (a*b*c));
         }, 
         function (a,b,c){
            if (b == 0 || c == 0)
            {
                console.log("Division not possible");
                return;
            }else{
             console.log("Division of numbers: " + ((a/b)/c));
            }
         }
         , a, b, c
 );




    