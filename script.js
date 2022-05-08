function MenuFonction() {
    var x = document.getElementById("maNavigationBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}