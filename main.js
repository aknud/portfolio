let dropDown = document.getElementsByClassName("drop-down")[0];
let burger = document.getElementsByClassName("hamburger")[0];

function scrollTo(e){
    let page = document.getElementById(e.toElement.innerText)
    hamburgerX(burger)
    page.scrollIntoView()
}

function hamburgerX(x) {
    x.classList.toggle("change");
    dropDown.classList.toggle("show");
}

let navLinks = document.querySelectorAll(".go-to")

navLinks.forEach(element => {
    element.addEventListener("click", scrollTo)
})