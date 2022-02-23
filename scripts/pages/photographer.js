
//............APPARITION HEADER + MEDIAS DU PHOTOGRAPHE................
async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");  //appel du json
    const data = await response.json();   // recup des données du json
    return data;                           //  retourne les données json
}

let url = new URL(window.location.href);
let photographerId = url.searchParams.get("id");
console.log(photographerId)

function displayData(photographers) {  //function qui concerne tous les photographe     

    photographers.forEach(photographer=> {  //dans les données de tous les photographes, pour chaque photographe
        if (photographer.id == photographerId){  //si l'id du photographe est égal à l'id de photographerId dans json

        const photographerModel = photographerFactoryInfo(photographer); //creation de la const qui met en place la f. de create pour un photographe
        const userCardDOM = photographerModel.getUserCardDOM(); 
         //creation de la const qui regroupe la 1ère et la 2ème fonction de create pour un photographe
    }});
}
function displayDataMedia(medias) {                      

    medias.forEach(media=> {
        if (media.photographerId == photographerId){
        const mediaModel = mediaFactory (media);
        const userMediaDOM = mediaModel.getUserMediaDOM();
        
        }
    })
}


//..........MENU FILTRES..........



async function tri(media){
    const photographerMedia = new mediaFactory (media);
            console.log(photographerMedia)

    const menuSelect = document.querySelector(".choix");
    menuSelect.addEventListener("click", e => {
        switch(e.target.class){
            
            case "pop" :
                photographerMedia.sort (function (a, b) {
                    return b.likes - a.likes;
                })
            break

            case "date" :
                photographerMedia.sort (function (a, b) {
                    return b.date - a.date;
                })
            break

            case "titre" :
                photographerMedia.sort (function (a, b) {
                    return a.title - b.title;
                })
            break
        }
    })
}
tri();







async function display(){                                              
    const {photographers, media} = await getPhotographers();  //créat de la const qui doit récupérer les données json  via la f. fetch
    displayData(photographers); 
    displayDataMedia(media);
}
display ();                         //applique la fonction display pour afficher les données demandées







