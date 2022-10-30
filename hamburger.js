const hamburger=document.querySelector(".hamburger");
const mainMenu=document.querySelector(".mainMenu");
const closeMenu=document.querySelector(".closeMenu");
const menu_item =document.querySelectorAll(".header .nav-bar .nav-list ul li a");

const yellowLogo = document.querySelector(".yellow-logo");
const whiteLogo = document.querySelector(".white-logo");

hamburger.addEventListener("click",show);
closeMenu.addEventListener("click",close)

function show(){
    mainMenu.classList.add("active");
}
function close(){
    mainMenu.classList.remove("active");
}


document.addEventListener("scroll",()=>{
    var scroll_position=window.scrollY;

    if(scroll_position>250){
        header.style.backgroundColor="#175c20";
        yellowLogo.classList.remove("active");
        whiteLogo.classList.add("active");
    }
    else
    {
        header.style.backgroundColor = "#29494baf";
        yellowLogo.classList.add("active");
        whiteLogo.classList.remove("active");

    }
})