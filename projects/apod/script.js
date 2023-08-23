const apiKey = "3tnqqlDG7pc1awf8SNSRnPuzAHGV0C3WYjcuWf2a"

//form elements
const formE = document.querySelector("form")
const inputE = document.getElementById("dateInpt")

//result Elements
const titleE = document.getElementById("picTitle")
const explanationE =document.getElementById("explanation")
const imgE = document.getElementById("picResult")
const hdImgContainerE = document.getElementById("hdContainer")
const hdImgE = document.getElementById("hdImg")
const dateE = document.getElementById("picDate")

let currentApod ={}

//Favorites
const favoriteSectionE = document.getElementById("favorites")
const favoriteBtnE = document.getElementById("favoriteBtn")

const storedFavs = localStorage.getItem('favorites')
let favorites = storedFavs ? JSON.parse(storedFavs) : {}


async function apiCall(date){
    // const response = await fetch ("sample.JSON")
    const response = await fetch ("https://api.nasa.gov/planetary/apod?api_key="+apiKey+"&date="+date) 
    const json = await response.json()
    console.log(json)
    return json;
}

function loadFavorites(){
    favoriteSectionE.innerHTML=""
    for (fav in favorites){
        singleFavoriteRender(favorites[fav])
    }
}




function singleFavoriteRender(favorite){
    const containerE = document.createElement("div")
    
    const favTitleE = document.createElement("h3")
    
    const favImgE = document.createElement("img")

    const favDateE = document.createElement("h4")

    const deleteE = document.createElement("button")

    const favInfoContE = document.createElement("div")

    assignmentHelper(favTitleE, favDateE, favImgE, favorite)

    deleteE.innerText = "Remove"

    favTitleE.setAttribute("class","favTitle")
    favImgE.setAttribute("class","favImg")
    favDateE.setAttribute("class","favDate")
    deleteE.setAttribute("class","deleteBtn")
    containerE.setAttribute("class","favContainer")
    favInfoContE.setAttribute("class","favInfo")
    
    
    containerE.setAttribute("data-date", favorite.date)
    deleteE.setAttribute("data-date", favorite.date)


    containerE.appendChild(favImgE)

    favInfoContE.appendChild(favTitleE)
    favInfoContE.appendChild(favDateE)
    favInfoContE.appendChild(deleteE)
    containerE.appendChild(favInfoContE)


    containerE.addEventListener('click', function(e){
        console.log("delete event triggered")

        const btnE = e.target
        if (btnE.className == "deleteBtn"){
            console.log("delete button pressed")
            const date = btnE.getAttribute("data-date")
            const favE = document.querySelector("[data-date='"+date+"']")
            console.log(date)
            delete favorites[date]
            loadFavorites()
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }

    })



    favoriteSectionE.appendChild(containerE)

}

function assignmentHelper(tE, dE, iE, apod){
    tE.innerText = apod.title
    dE.innerText = apod.date
    if (apod.media_type == "image"){
        iE.setAttribute("src", apod.url)
    }else{
        iE.setAttribute("alt","not an image")
    }
}


formE.addEventListener('submit',async function(e) {
    e.preventDefault()
    
    currentApod = await apiCall(inputE.value)
    
    assignmentHelper(titleE, dateE, imgE, currentApod)
    explanationE.innerText = currentApod.explanation
    hdImgE.setAttribute("src", currentApod.hdurl)
    favoriteBtnE.hidden = false
   

})

favoriteBtnE.addEventListener('click', function(e){
    console.log("favorites button pressed")
    favorites[currentApod.date]= currentApod
    loadFavorites()
    localStorage.setItem('favorites', JSON.stringify(favorites))
})

imgE.addEventListener('click',function(e){
    hdImgContainerE.hidden = false
})

hdImgContainerE.addEventListener('click', function(e){
    if (e.target.tagName != 'IMG'){
        console.log(e.target.tagName)
        hdImgContainerE.hidden = true
    }
})

hdImgE.addEventListener('click',function(e){
    e.target.classList.toggle("regularSize")
    e.target.classList.toggle("enlarged")
})

loadFavorites()