const navigation_bar = document.querySelector(".navigation-bar");
let lastScrollY=window.screenY;

window.addEventListener("scroll",  () => {
    if(lastScrollY<window.scrollY)
    {
        console.log("we are going down");
        navigation_bar.classList.add("nav--hidden");
    }
    else{

        console.log("we are going up");
        navigation_bar.classList.remove("nav--hidden");
    }
    lastScrollY=window.scrollY;
});
const randomColor=document.getElementsByClassName(".logo-filter")

let hex = "#"+ Math.floor(Math.random()*16777215).toString(16);
randomColor.style.filter=hex;