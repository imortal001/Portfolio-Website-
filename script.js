const sidemenu = document.querySelector("#side-menu");


const navbar =  document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul");


function openMenu() {
    sidemenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
    sidemenu.style.transform = "translateX(16rem)";
}


function fetchweb(){
    window.open("https://dice-game-inky-zeta.vercel.app/");
}
function fetchweb2(){
    window.open("https://github.com/imortal001/Chat-App-React-");
}
function fetchweb3(){
    window.open("https://github.com/imortal001/Video-recomendation");
}

function fetchgithub(){
    window.open("https://github.com/imortal001");
}


window.addEventListener("scroll", () => {
    if (scrollY >  50) {
       navbar.classList.add( 'bg-white' , 'bg-opacity-50', 'backdrop-blur-lg' , 'shadow-sm'); 
       navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm');
    } else{
        navbar.classList.remove( 'bg-white' , 'bg-opacity-50', 'backdrop-blur-lg' , 'shadow-sm');
        navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm');
    }
});
