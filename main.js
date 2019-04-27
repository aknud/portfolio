let dropDown = document.getElementsByClassName("drop-down")[0];
let burger = document.getElementsByClassName("hamburger")[0];

function scrollTo(e){
    let page = document.getElementById(e.toElement.innerText);
    if(window.innerWidth < 768){
        hamburgerX(burger);
    }
    page.scrollIntoView();
}

function hamburgerX(x) {
    x.classList.toggle("change");
    dropDown.classList.toggle("show");
}

// Gets all the items in the menu, loops over them and adds an on click event listener so that when they are clicked the dom "scrolls" to the selected section view.
let navLinks = document.querySelectorAll(".go-to");

navLinks.forEach(element => {
    element.addEventListener("click", scrollTo)
});

//Typing effect
const TxtType = function(el, toRotate, pauseTime){
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.pauseTime = parseInt(pauseTime, 10) || 2000;
    this.txt = "";
    this.cursor();
    this.isDeleting = false;
};

TxtType.prototype.cursor = function(){
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length -1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let that = this;
    let delta = 200 - Math.random() * 100;

    if(this.isDeleting){
        delta /= 2;
    }

    //checks to see if the word is finished typing
    //if true sets isDelete to true
    if(!this.isDeleting && this.txt === fullTxt){
        delta = this.pauseTime;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === ""){
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(()=> {
        that.cursor()
    }, delta);
}

window.onload = function(){
    let elements = document.getElementsByClassName("typewrite");
    for(let i = 0; i < elements.length; i++){
        let toRotate = elements[i].getAttribute("data-rotate");
        let period = elements[i].getAttribute("data-period");
        if(toRotate){
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};


// Change color of navbar on scroll
window.onscroll = () => {
    const nav = document.getElementsByTagName("nav")[0]
    if(this.scrollY <= 959 ){
        console.log("heynow")
        nav.className = ""
    }
    else nav.className = "colorChange"
}