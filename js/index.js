const menuOpened = document.querySelector("header i");
const menuClosed = document.querySelector(".menu i");



function openMenu(){
    const menu = document.querySelector(".menu");
    menu.style.transform = "translateX(0vw)"
    menu.style.transition = "all 0.5s ease-in-out"
    menu.style.visibility = "visible"
}
function closeMenu(){
    const menu = document.querySelector(".menu");
    menu.style.transition = "all 0.5s ease-in-out"
    menu.style.transform = "translateX(25vw)"
    menu.style.visibility = "hidden"

}