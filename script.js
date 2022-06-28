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

document.addEventListener("scroll",()=>{
    var scroll_position=window.scrollY;
    if(scroll_position>250){
        header.style.backgroundColor="#29323c";
    }
    else
    {
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach((item)=>{
    item.addEventListener("click",()=>{
        mainMenu.classList.add("active");
        mainMenu.classList.remove("active");
    })
})


const colHeading = document.querySelectorAll(".col-heading")

colHeading.forEach(heading=>{
    heading.addEventListener("click",()=>{
        heading.classList.toggle("hidden")
    })
})

// const favorites = document.querySelectorAll(".favorite")

// favorites.forEach(favorite=>{
//     favorite.addEventListener("click",()=>{
//         favorite.innerHTML
//     })
// })


    