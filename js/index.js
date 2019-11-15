

/* Toogle Menu */
let toogledMenu = false;

function toogleMenu() {

    let toToogle = document.getElementsByClassName("item");

    for(let i = 0 ; i < toToogle.length ; i++) {
        if(toogledMenu) {
            toToogle.item(i).style.display = "block";
        } else {
            toToogle.item(i).style.display = "none";
        }
    }

    
    let toogleLogo = document.getElementById("toogle");
    console.log("ToogleLogo : " + toogledMenu);
    if(toogledMenu) {
        toogleLogo.setAttribute("src", "images/crossBlack.png");
    } else {
        toogleLogo.setAttribute("src", "images/toogle.png");
    }

    toogledMenu = !toogledMenu;
}
function toogleMenu2() {

    let toToogle = document.getElementsByClassName("item");

    for(let i = 0 ; i < toToogle.length ; i++) {
        if(toogledMenu) {
            toToogle.item(i).style.display = "block";
        } else {
            toToogle.item(i).style.display = "none";
        }
    }

    
    let toogleLogo = document.getElementById("toogle");
    console.log("ToogleLogo : " + toogledMenu);
    if(toogledMenu) {
        toogleLogo.setAttribute("src", "../images/crossBlack.png");
    } else {
        toogleLogo.setAttribute("src", "../images/toogle.png");
    }

    toogledMenu = !toogledMenu;
}

