var buttons = document.querySelectorAll('button');
var icons = document.querySelectorAll('i');
var section3 = document.getElementById('section-3');
var section4 = document.getElementById('section-4');

var color = document.getElementById('color');


function getSavedColor() {
  const savedColor = localStorage.getItem('color');
  return savedColor;
}

function updateColor() {
  const selectedColor = color.value;
  section3.style.backgroundColor = selectedColor;
  section4.style.backgroundColor = selectedColor;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.color = selectedColor;
    buttons[i].style.borderColor = selectedColor;
  }
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.color = selectedColor;
  }
  localStorage.setItem('color', selectedColor);
}

section3.style.backgroundColor = getSavedColor();
section4.style.backgroundColor = getSavedColor();

for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.color = getSavedColor();
  buttons[i].style.borderColor = getSavedColor();
}

for (var i = 0; i < icons.length; i++) {
  icons[i].style.color = getSavedColor();
}

color.addEventListener('input', updateColor);