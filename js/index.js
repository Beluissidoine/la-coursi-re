
const navbarList = document.querySelector(".nav-list")
const menu = document.querySelector(".menu")

    menu.addEventListener('click',()=>{
        navbarList.classList.toggle('mobile-menu')
    })