

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
    toogledMenu = !toogledMenu;
}

