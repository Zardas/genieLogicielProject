let windowOpen = false;

/* Open Window */

function selectMovie(movieId) {
    let windowMovie = document.getElementById("selectedMovie");

    if(!windowOpen) {
        windowMovie.style.display = "block";

        let moviePoster = document.getElementById("moviePoster");
        console.log(screen.width);
        if(screen.width <= 900) { /* Version tablette ou mobile */
            moviePoster.setAttribute("src", "../images/posters/poster" + movieId + "h.jpg");
        } else {
            moviePoster.setAttribute("src", "../images/posters/poster" + movieId + "v.jpg");
        }
        
        /* L'utilisateur ne peut pas scroll lorsque il est en preview de film */
        let body = document.getElementsByTagName('body')[0];
        body.style.overflowX = "hidden";
        body.style.overflowY = "hidden";
    }

    windowOpen = !windowOpen;
}

/* Close window */

function eventWindow() {
    let windowMovie = document.getElementById("selectedMovie");

    if(windowOpen) {
        windowMovie.style.display = "none";
    }

    windowOpen = !windowOpen;
}

/* Devellop synopsis */
let synopsisDevellop = false;

function devellopSynopsisNormal() {
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


function devellopSynopsisBlack() {
    let synopsis = document.getElementById("synopsis");
    let synopsisLogo = document.getElementById("synopsisDevellop");
    let synopsisSuite = document.getElementById("synopsisSuite");

    if(!synopsisDevellop) {
        synopsis.style.overflow = "visible";
        synopsisSuite.style.display = "none";
        synopsisLogo.setAttribute("src", "../images/developpLogoBlack.png");
    } else {
        synopsis.style.overflow = "hidden";
        synopsisSuite.style.display = "block";
        synopsisLogo.setAttribute("src", "../images/undeveloppLogoBlack.png");
    }

    synopsisDevellop = !synopsisDevellop;
}