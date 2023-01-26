window.addEventListener("scroll", function(){
var header= document.querySelector("header")
header.classList.toggle("sticky", window.scrollY > 0)
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})