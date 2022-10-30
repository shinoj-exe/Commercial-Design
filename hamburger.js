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

const colHeading = document.querySelectorAll(".col-heading")

colHeading.forEach(heading=>{
    heading.addEventListener("click",()=>{
        heading.classList.toggle("hidden")
    })
})

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
