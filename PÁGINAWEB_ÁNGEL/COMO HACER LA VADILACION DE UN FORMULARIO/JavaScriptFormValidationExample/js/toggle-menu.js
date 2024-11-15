function listenForToggle() {
  const HEADER_HAMBURGER = document.getElementById("header-hamburger");
  HEADER_HAMBURGER.addEventListener("click", toggleHamburger);
  console.log("adiosito")
}

function toggleHamburger() {
  console.log("hola holita")
  const HEADER_MENU = document.getElementById("header-menu");
  HEADER_MENU.classList.toggle("menu-showing");
}

listenForToggle();