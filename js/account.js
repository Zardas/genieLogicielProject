
/* Change username */
function modifUsername() {

    let username = document.getElementById("username");
    let option = document.getElementById("option");
    let modifUsername = document.getElementById("modifUsername");

    username.style.display = "none";
    option.style.display = "none";
    modifUsername.style.display = "block";
}


function submitUsernameChange() {

    let username = document.getElementById("username");
    let option = document.getElementById("option");
    let modifUsername = document.getElementById("modifUsername");
    let newUsername = document.getElementById("newUsername");

    console.log("Flag a");
    console.log(newUsername.value);
    username.innerHTML = newUsername.value;

    username.style.display = "block";
    option.style.display = "block";
    modifUsername.style.display = "none";

    
}
