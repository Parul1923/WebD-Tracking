const a = document.getElementById("menu-toggle");
const b = document.getElementsByClassName("menu-toggle");
const c = document.getElementById("nav-small");
const d = document.getElementsByTagName("a");
let showMenu = true;
a.addEventListener("click", function() {

    if (showMenu) {
        a.children[0].setAttribute('src', 'images/icon-close.svg');
        showMenu = false;
        c.classList.remove("close");
        c.classList.add("open");
    } else {
        a.children[0].setAttribute('src', 'images/icon-hamburger.svg');
        showMenu = true;
        c.classList.add("close");
        c.classList.remove("open");
    }
});