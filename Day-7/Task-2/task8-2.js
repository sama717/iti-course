var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 3); 
function getCookie(key) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookiePair = cookies[i].split("=");
        if (cookiePair[0] === key) {
            return cookiePair[1];
        }
    }
    return null;
}

function setCookie(key, value, expiryDate) {
    if (!expiryDate) {
        document.cookie = key + "=" + value;
    } else {
        document.cookie = key+"="+value+";expires="+expiryDate;
    }
}

function displayInfo() {
    var name = getCookie("name");
    var gender = getCookie("gender");
    var color = getCookie("color");
    var visitCount= getCookie("visitCount");;

    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    // visitCount = getCookie("visitCount");
    setCookie("visitCount", visitCount, expirationDate);

   
    if (name) {
        var displayName = document.getElementById("displayName");
        displayName.innerText = name;
        if (color) {
            displayName.style.color = color;
        }
    }

    if (gender) {
        var genderImage = document.getElementById("genderImage");
        if (gender === "male") {
            genderImage.src = "../Task-2/imgs/gender.jpg";
        } else if (gender === "female") {
            genderImage.src = "../Task-2/imgs/gender-2.jpg";
        }
        genderImage.style.display = "inline-block"; 
    }

    // Display the visit count
    var visitCountDisplay = document.getElementById("visitCounter");
    visitCountDisplay.innerText = visitCount;
    if (color) {
        visitCountDisplay.style.color = color; 
    }
}

window.onload = displayInfo;
