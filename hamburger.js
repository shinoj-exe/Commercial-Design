const hamburger=document.querySelector(".hamburger");
const mainMenu=document.querySelector(".mainMenu");
const closeMenu=document.querySelector(".closeMenu");
const menu_item =document.querySelectorAll(".header .nav-bar .nav-list ul li a");

hamburger.addEventListener("click",show);
closeMenu.addEventListener("click",close)

function show(){
    mainMenu.classList.add("active");
}
function close(){
    mainMenu.classList.remove("active");
}
