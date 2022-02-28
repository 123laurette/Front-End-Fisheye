const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");
const menuSelect = document.querySelector(".choix");



//............APPARITION HEADER + MEDIAS DU PHOTOGRAPHE................


async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");  //appel du json
    const data = await response.json();   // recup des données du json
    return data;                           //  retourne les données json
}



function displayData(photographers) {  //function qui concerne tous les photographe     

    photographers.forEach(photographer=> {  //dans les données de tous les photographes, pour chaque photographe
        if (photographer.id == photographerId){  //si l'id du photographe est égal à l'id de photographerId dans json

        const photographerModel = photographerFactoryInfo(photographer); //creation de la const qui met en place la f. de create pour un photographe
        const userCardDOM = photographerModel.getUserCardDOM(); 
         //creation de la const qui regroupe la 1ère et la 2ème fonction de create pour un photographe
    }});
}
function displayDataMedia(medias) { 
    console.log(menuSelect.value);
    console.log(medias);
    switch(menuSelect.value){
            
        case "pop" :
            medias.sort (function (a, b) {
                return b.likes - a.likes;
            })
            break;

        case "date" :
            medias.sort (function (a, b) {
                return new Date(b.date) - new Date(a.date);
            })
            break;

        case "titre" :
            medias.sort (function (a, b) {
                return a.title.localeCompare (b.title);
            })
            break;
    }   
    console.log(medias);

    medias.forEach(media=> {
        if (media.photographerId == photographerId){
        const mediaModel = mediaFactory (media);
        const userMediaDOM = mediaModel.getUserMediaDOM();
        
        }
    })
}


async function display(){                                              
    const {photographers, media} = await getPhotographers();  //créat de la const qui doit récupérer les données json  via la f. fetch
    displayData(photographers); 
    displayDataMedia(media);
    menuSelect.onchange = function (){displayDataMedia(media)}; 

}
display ();                         //applique la fonction display pour afficher les données demandées







