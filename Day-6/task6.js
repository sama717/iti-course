//Task 1
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");
var timer = document.getElementById("timer");

var startTime = 0;
var elapsedTime = 0;
var currentTime = 0;
var paused = true;
var interval1;
var hr = 0;
var min = 0;
var sec = 0;
var mil = 0;
var activeButton = null; 

function setActiveButton(button) {
    if (activeButton) {
        activeButton.style.backgroundColor = ""; 
        activeButton.style.color = ""; 
    } 
        button.style.backgroundColor = "#345995"; 
        button.style.color = "white"; 
        activeButton = button;
  }
  

startBtn.addEventListener("click", function() {
    if (paused) {
        setActiveButton(startBtn);
        paused = false;
        startTime = Date.now() - elapsedTime;
        interval1 = setInterval(updateTime, 10);
    }
});

stopBtn.addEventListener("click", function() {
    if (!paused) {
        setActiveButton(stopBtn);
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(interval1);
    }
});

resetBtn.addEventListener("click", function() {
    setActiveButton(resetBtn);
    paused = true;
    clearInterval(interval1);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hr = 0;
    min = 0;
    sec = 0;
    mil = 0;
    timer.textContent = "00:00:00:00";
});

function updateTime() {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    mil = Math.floor((elapsedTime % 1000) / 10);
    sec = Math.floor((elapsedTime / 1000) % 60);
    min = Math.floor((elapsedTime / (1000 * 60))% 60);
    hr = Math.floor((elapsedTime / (1000 * 60 * 60))% 60);

    mil = pad(mil);
    sec = pad(sec);
    min = pad(min);
    hr = pad(hr);

    timer.textContent = `${hr}:${min}:${sec}:${mil}`;
    function pad(unit){
        return (("0" + unit).length > 2 ? unit : "0" + unit);
    }
}

//Task 2
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var redText = document.getElementById("redText");
var yellowText = document.getElementById("yellowText");
var greenText = document.getElementById("greenText");

var lights = [red, yellow, green];
var texts = [redText, yellowText, greenText];
var currentIndex = 0; 
var interval; 

function changeLights() {
    for (var i = 0; i < lights.length; i++) {
        lights[i].style.backgroundColor = "gray";
        texts[i].style.visibility = "hidden";
    }

    if (currentIndex === 0) {
        red.style.backgroundColor = "#D20A2E"; 
        texts[currentIndex].style.visibility = "visible";
    } else if (currentIndex === 1) {
        yellow.style.backgroundColor = "#ECC846"; 
        texts[currentIndex].style.visibility = "visible";
    } else if (currentIndex === 2) {
        green.style.backgroundColor = "#32936F"; 
        texts[currentIndex].style.visibility = "visible";
    }

    currentIndex = (currentIndex + 1) % 3;
}


function startInterval() {
    interval = setInterval(changeLights, 2000); 
}


function stopInterval() {
    clearInterval(interval);
}

startInterval();

for (var i = 0; i < lights.length; i++) {
    lights[i].addEventListener('mouseenter', stopInterval); 
    lights[i].addEventListener('mouseleave', startInterval); 
}


//Task 3
var slides = document.querySelectorAll(".slides img");
var slidesIndex = 0;
var intervalImg = null;

initialize();

function initialize(){
    slides[slidesIndex].classList.add("displaySlide")
}
function showSlides(index) {
    if (index >= slides.length) {
        slidesIndex = 0;
    } else if (index < 0) {
        slidesIndex = slides.length - 1;
    } else {
        slidesIndex = index;
    }

    slides.forEach(function(slide){
        slide.classList.remove("displaySlide");
    })
    slides[slidesIndex].classList.add("displaySlide");
}

function next() {
    slidesIndex++;
    showSlides(slidesIndex);
}

function prev() {
    slidesIndex--;
    showSlides(slidesIndex);
}

function play() {
    intervalImg = setInterval(next, 2000);
}

function pause() {
    clearInterval(intervalImg);
}

//Task 4
var successBtn = document.getElementById("successBtn");
var errorBtn = document.getElementById("errorBtn");
var alertText = document.getElementById("alertText");
var alertMessage = document.getElementById("alertMessage");
var icon = document.getElementById("icon");


successBtn.addEventListener("click", function() {
    alertText.innerHTML = "Success";
    alertMessage.innerHTML = "This is a Success message";
    icon.innerHTML = '<i class="fa-solid fa-check" style="color: #32936F;"></i>';
});


errorBtn.addEventListener("click", function() {
    alertText.innerHTML = "Error";
    alertMessage.innerHTML = "This is an Error message";
    icon.innerHTML = '<i class="fa-regular fa-circle-xmark" style="color: #D20A2E;"></i>';
});