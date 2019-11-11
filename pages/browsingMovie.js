



/* Close window */
let windowOpen = true;

function eventWindow() {
    let windowMovie = document.getElementById("selectedMovie");

    if(windowOpen) {
        windowMovie.style.display = "none";
    }

    toogledMenu = !toogledMenu;
}

/* Devellop synopsis */
let synopsisDevellop = false;

function devellopSynopsis() {
    let synopsis = document.getElementById("synopsis");
    let synopsisLogo = document.getElementById("synopsisDevellop");
    let synopsisSuite = document.getElementById("synopsisSuite");

    if(!synopsisDevellop) {
        synopsis.style.overflow = "visible";
        synopsisSuite.style.display = "none";
        synopsisLogo.setAttribute("src", "../images/developpLogo.png");
    } else {
        synopsis.style.overflow = "hidden";
        synopsisSuite.style.display = "block";
        synopsisLogo.setAttribute("src", "../images/undeveloppLogo.png");
    }

    synopsisDevellop = !synopsisDevellop;
}