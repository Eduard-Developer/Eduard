const kontakt = document.getElementById('kontakt');
function onClick(){      
	

    console.log("it is finally ok and the window.alert() was the actual fault");
}
if(kontakt){
    kontakt.addEventListener("click", onClick(), false);
}

/*const navSlide = () =>{
   const nav = document.querySelector(".nav-links");
   const burger = document.querySelector(".burger");
   const navlinks = document.querySelectorAll(".nav-links li") 
   const title = document.querySelector(".Title h1")
     

burger.addEventListener("click", () => {
    //nav.classList.toggle("nav-active");
    //navlinks.forEach((link, index) => { 
        //if (link.style.animation){
            //link.style.animation = "";
        //}else{
            //link.style.animation = `Navlinkop 0.5s ease forwards ${index / 5 + 0.75}s`;
        //}

    //});

    window.alert("Work in progress!")
    });}*/







/*const _kontaktformular = document.getElementsByClassName("kontakt");



_kontaktformular.addEventListener("click", () => {
    console.log("Work in progress!")
    window.alert("Work in progress!");


})*/


//_kontaktformular();


 