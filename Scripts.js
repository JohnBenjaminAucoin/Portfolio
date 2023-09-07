$( "#navBar" ).load( "navbar.html" );

const containerE = document.querySelector(".container");
const courseContainerE = document.querySelector(".coursesContainer")
const projectsContainerE = document.querySelector(".projectsContainer")

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
        gradeE.setAttribute("title","Grade is out of 4.0")

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


function addProjects(){
    for (var project of projects){
        const cardE = document.createElement("div");
        
        const imgContE = document.createElement("div");
        const imglinkE = document.createElement("a");

        const imgE = document.createElement("img");

        const titleE = document.createElement("h1");
        const typeE = document.createElement("h3");
        const descriptionE = document.createElement("p");

        cardE.setAttribute("class","projectCard mainfont white");
        imgContE.setAttribute("class","previewImgContainer");
        imglinkE.setAttribute("target","_blank");
        imglinkE.setAttribute("rel","noreferrer noopener");
        
        imglinkE.setAttribute("class","simplehover");


        imglinkE.setAttribute("href",project.link);

        imgE.setAttribute("src", "./images/previews/"+project.image);

        titleE.innerText = project.title;
        typeE.innerText = "Type: "+project.type;
        descriptionE.innerHTML = project.description; 

        imglinkE.appendChild(imgE);
        imgContE.appendChild(imglinkE);

        cardE.appendChild(imgContE);
        cardE.appendChild(titleE);
        cardE.appendChild(typeE);
        cardE.appendChild(descriptionE);

        projectsContainerE.appendChild(cardE);

    }
}


try{
    addProjects();

}catch (RefereceError){
    
}
try{
    addCourses();
}catch (RefereceError){

}

