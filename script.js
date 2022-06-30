const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })

    }


 if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })

    }  



/*
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})*/

/*close menu for every item clicked
document.querySelectorAll("items").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

*/
