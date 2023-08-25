const projE = document.getElementById("projectsNav");
const contactE = document.getElementById("contactNav");
const coursesE = document.getElementById("coursesNav");
const homeE = document.getElementById("homeNav");
const aboutE = document.getElementById("aboutNav");


const bodyE = document.querySelector("body");




function hoverEffects(navE, tohover, fromhover){
    navE.addEventListener("mouseover", (e) =>{ 
        bodyE.classList = "animationDetails noscroll backgroundSky"
        bodyE.classList.remove(fromhover);
        bodyE.classList.toggle(tohover);
     
    })
    
    navE.addEventListener("mouseout", (e) =>{ 
        bodyE.classList.add(fromhover);
        bodyE.classList.toggle(tohover);
    
    })
}

hoverEffects(projE, "backgroundToWireframes", "backgroundFromWireframes");
hoverEffects(coursesE, "backgroundToSchool", "backgroundFromSchool");
hoverEffects(aboutE, "backgroundToSset", "backgroundFromSset");
hoverEffects(homeE, "backgroundToHome", "backgroundFromHome");

