/* Hide/show navbar on scroll */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

/* Change color of button on click */
function seguir(id) // no ';' here
{

    var elem = document.getElementById(id);
    if (elem.innerHTML == "+ seguir"){
        elem.innerHTML = "✓ sugiendo";
        elem.style.backgroundColor = "#FF5733"
    } 
    else {
        elem.innerHTML = "+ seguir";
        elem.style.backgroundColor = "#808080"
    }
}