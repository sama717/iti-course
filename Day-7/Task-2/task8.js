
    var info = document.getElementById("infoForm");
    var name2 = document.getElementById("name");
    var color = document.getElementById("color");
    var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 3); 
    
    function setCookie(key, value, expiryDate) {
        if (!expiryDate) {
            document.cookie = key + "=" + value;
        } else {
            document.cookie = key+"="+value+";expires="+expiryDate;
        }
    }

    function getCookie(key) {
        var cookies = document.cookie.split("; ");
        for (var i = 0; i < cookies.length; i++) {
            var cookieKey = cookies[i].split("=");
            if (cookieKey[0] === key) {
                return cookieKey[1];
            }
        }
        return null;
    }

    function formSubmit() {
        var gender = document.querySelector('input[name="gender"]:checked');
        setCookie("name", name2.value, expirationDate);
        setCookie("gender", gender.value, expirationDate);
        setCookie("color", color.value, expirationDate);
    

        window.location.href= "../Task-2/cookie.html";
    }

    info.addEventListener("submit", formSubmit);
