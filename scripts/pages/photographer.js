const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");
const menuSelect = document.querySelector(".choix");



//............APPARITION HEADER + MEDIAS DU PHOTOGRAPHE................

//  RECUPERATION DU JSON
async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");  //appel du json
    const data = await response.json();   // recup des données du json
    return data;                           //  retourne les données json
}


//  APPARITION DU HEADER DE LA PAGE DU PHOTOGRAPHE

function displayData(photographers) { 

    const photographerHeader = document.querySelector(".photograph-header");

    photographers.forEach(photographer=> {  //dans les données de tous les photographes, pour chaque photographe
        if (photographer.id == photographerId){  //si l'id du photographe est égal à l'id de photographerId dans json
        const photographerModel = photographerFactoryInfo(photographer); //creation de la const qui met en place la f. de create pour un photographe
        const userCardDOM = photographerModel.getUserMediaCardDOM();  //creation de la const qui regroupe la 1ère et la 2ème fonction de create pour un photographe
        photographerHeader.appendChild(userCardDOM); //MET LA FACTORIE PHOTOGRAPHER EN TANT QU'ENFANT.
    }});
}

// APPARITION DES MEDIAS DE LA PAGE DU PHOTOGRAPHE
function displayDataMedia(medias) { 

    switch(menuSelect.value){       // MISE EN PLACE DU TRIE
            
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
    
    const cartesMedias = document.querySelector(".cartes_medias");
    cartesMedias.innerHTML = "";

    medias.forEach(media=> {
        if (media.photographerId == photographerId){
        const mediaModel = mediaFactory (media);
        const userMediaDOM = mediaModel.getUserMediaDOM();
        cartesMedias.appendChild(userMediaDOM);
        }
    })
}



//  ACTIVE LES FONCTIONS PRECEDENTES (PHOTOGRAPHE ET MEDIAS)
async function display(){                                              
    const {photographers, media} = await getPhotographers();  //créat de la const qui doit récupérer les données json  via la f. fetch
    displayData(photographers); 
    displayDataMedia(media);
    menuSelect.onchange = function (){displayDataMedia(media)}; 

}
display (); 








