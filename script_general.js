var username

window.onload = function(){
    username = localStorage.getItem("username")
    document.getElementById('person').innerHTML = username;
}

function save_user(){
    username = document.getElementById('username').value;
    
    if (username == ""){
        alert("all fields must be filled out");
        return false;
    }

    localStorage.setItem("username", username);
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
function seguir(id)
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