const navSlide = () =>{
  const nav = document.querySelector(".nav-links");
   const burger = document.querySelector(".burger");
   const navlinks = document.querySelectorAll(".nav-links li") 
   const title = document.querySelector(".Title h1")
     

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navlinks.forEach((link, index) => { 
        if (link.style.animation){
            link.style.animation = "";
        }else{
            link.style.animation = `Navlinkop 0.5s ease forwards ${index / 5 + 0.75}s`;
        }

    });
    });
}
navSlide();

//function windowalert(){

window.alert("Willkommen!");

//}