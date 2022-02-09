
//............APPARITION HEADER DU PHOTOGRAPHE................
async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");  //appel du json
    const data = await response.json();   // recup des données du json
    return data;                            //  retourne les données json
}

let url = new URL(window.location.href);
let photographerId = url.searchParams.get("id");

function displayData(photographers) {  //function qui concerne tous les photographe     

    photographers.forEach(photographer=> {  //dans les données de tous les photographes, pour chaque photographe
        if (photographer.id == photographerId){  //si l'id du photographe est égal à l'id de photographerId dans json

        const photographerModel = photographerFactoryInfo(photographer); //creation de la const qui met en place la f. de create pour un photographe
        const userCardDOM = photographerModel.getUserCardDOM();     //creation de la const qui regroupe la 1ère et la 2ème fonction de create pour un photographe
    }});
}

async function display(){                                              
    const {photographers, media} = await getPhotographers();  //créat de la const qui doit récupérer les données json  via la f. fetch
    displayData(photographers);    // applique la fonction displayData pour tous les photographes
}
display ();                         //applique la fonction display pour afficher les données demandées



//...............APPARITION DES MEDIAS DU PHOTOGRAPHE..............
async function getMedia(){
    const response = await fetch ("data/photographers.json");
    let medias = await response.json();
    medias = medias.media;
    console.log(medias);
}
function displayDataMedia(photographer) {                      

    medias.forEach(media=> {
        if (media.photographerId == photographer.id){

        const mediaModel = mediaFactory (media);
        const userMediaDOM = mediaModel.getUserMediaDOM();
        images.appenchild(userMediaDOM) ;
        console.log(userMediaDOM)

    }});
}
async function displayMedia(){                                              
    const {medias} = await getMedia();
    displayDataMedia(medias);
}
displayMedia (); 















//.............OUVERTURE ET FERMETURE DU MENU..............
const fermer = document.querySelector("#fermer");
const ouvert = document.querySelector("#ouvert");
const pop = document.querySelector(".pop");
const date = document.querySelector(".date");
const titre = document.querySelector(".titre");
const choix = document.querySelector(".choix");

ouvert.addEventListener("click",chevronOuvert)

function chevronOuvert (){
    fermer.style.display = "block";
    ouvert.style.display = "none";
    date.style.display = "block";
    titre.style.display = "block";
    choix.style.height = "160px";
}

fermer.addEventListener("click",chevronFermer)

function chevronFermer (){
    fermer.style.display = "none";
    ouvert.style.display = "block";
    date.style.display = "none";
    titre.style.display = "none";
    choix.style.height = "60px";
} 