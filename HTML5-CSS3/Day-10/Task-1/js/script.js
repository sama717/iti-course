var canvas = document.querySelector("canvas");
var color = document.getElementById("color");
var btn = document.getElementById("btn");

var context = canvas.getContext("2d");

btn.addEventListener("click", function(){
    context.strokeStyle = color.value;
    for(var i =0 ; i<Math.floor(Math.random() * 100) ; i++){
        context.beginPath();
        var x =Math.floor( Math.random() * canvas.width);
        var y = Math.floor(Math.random() * canvas.height);
        context.arc( x, y , 20 , 0 , 2*Math.PI);
        context.stroke();
    }
})

color.addEventListener("input", function() {
    context.clearRect(0, 0, canvas.width, canvas.height); 
});

