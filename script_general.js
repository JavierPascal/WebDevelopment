var email, username

window.onload = function(){
    email = localStorage.getItem("email")
    username = localStorage.getItem("username")
}


function save_user(){
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    

    if (username == "" || email == ""){
        alert("all fields must be filled out");
        return false;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    location.href = "../Home_con_login/home_con_login.html"

}

/* Hide/show navbar on scroll */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-sticky").style.top = "0";
    } else {
        document.getElementById("navbar-sticky").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

/* Change color of button on click */
function seguir(id) // no ';' here
{

    var elem = document.getElementById(id);
    if (elem.innerHTML == "+ seguir"){
        elem.innerHTML = "✓ siguiendo";
        elem.style.backgroundColor = "#FF5733"
    } 
    else {
        elem.innerHTML = "+ seguir";
        elem.style.backgroundColor = "#808080"
    }
}