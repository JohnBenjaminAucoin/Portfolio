const projE = document.getElementById("projectsHeader");
const bodyE = document.querySelector("body");
const containerE = document.querySelector(".container");
const courseContainerE = document.querySelector(".coursesContainer")

projE.addEventListener("mouseover", (e) =>{ 
    bodyE.classList.remove("backgroundSky");
    bodyE.classList.remove("backgroundReturnToSky");
    bodyE.classList.toggle("backgroundWireframes")
    console.log("hovered")
})

projE.addEventListener("mouseout", (e) =>{ 
    bodyE.classList.add("backgroundReturnToSky");
    bodyE.classList.toggle("backgroundWireframes");
    console.log("hovered");
})



function addCourses(){
    console.log(courses);
    
    for (var course of courses){



        const cardE = document.createElement("div");

        const cardline1E = document.createElement("div");
        const dateE = document.createElement("h3");
        const gradeE = document.createElement("h3");
        
        const nameE = document.createElement("h1");
        const linkE = document.createElement("a");

        const profsE = document.createElement("h3");
        const descE = document.createElement("p");
        const skillsE = document.createElement("h3");


        dateE.innerText = course.dateStarted;
        gradeE.innerText = "Grade: " + course.grade;
        
        linkE.innerText = course.name;
        profsE.innerText = "Prof(s): "+ course.prof;
        descE.innerText = course.description;
        skillsE.innerText = course.skills;

        cardE.setAttribute("class", "courseCard mainfont");

        cardline1E.setAttribute("class", "cardLine1");

        linkE.setAttribute("href", course.link);
        linkE.setAttribute("class", "mainfont white");
        nameE.appendChild(linkE);

        cardline1E.appendChild(dateE);
        cardline1E.appendChild(gradeE);

        cardE.appendChild(cardline1E);
        cardE.appendChild(nameE);
        cardE.appendChild(profsE);
        cardE.appendChild(descE);
        cardE.appendChild(skillsE);

        courseContainerE.appendChild(cardE);

    }

}

addCourses();