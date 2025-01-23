var i = 0;
var sum = 0;
var count = prompt ("Enter number count to add");
count = Number(count);

if (count == 0 || isNaN(count)){
    console.log("Entered 0 or Not a Number");
} else{
    while (i < count){
        var n = prompt("Enter a number");
        n = Number (n);
        if ( n == 0 || isNaN (n)) {
            console.log('Entered 0 or Not a Number');
            console.log(n);
            break;
        } else{
            sum += n;
            console.log(sum);
                if(sum>=100){
                    console.log("Sum is greater than 100 or equal to 100");
                    console.log('Sum = ' + sum);
                    break;
                }
            } 
            i++;
        }

        if (sum < 100){
            console.log('Sum = ' + sum);  
    }
}