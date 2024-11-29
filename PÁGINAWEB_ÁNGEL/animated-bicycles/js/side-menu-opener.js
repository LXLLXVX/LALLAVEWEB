function listenToClickOnSideMenuIconOpener(){
    const SIDE_MENU_OPENER= document.getElementById("side-menu-opener");
    SIDE_MENU_OPENER.addEventListener("click", openSideMenu);
}

function openSideMenu(){
    const SIDE_MENU = document.getElementById("side-menu");
    SIDE_MENU.classList.toggle("side-menu-opened");
}

listenToClickOnSideMenuIconOpener();