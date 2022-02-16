
//............APPARITION HEADER + MEDIAS DU PHOTOGRAPHE................
async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");  //appel du json
    const data = await response.json();   // recup des données du json
    return data;                           //  retourne les données json
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

function displayDataMedia(medias) {                      

    medias.forEach(media=> {
        if (media.photographerId == photographerId){
        const mediaModel = mediaFactory (media);
        const userMediaDOM = mediaModel.getUserMediaDOM();
        

        //..........mise en place du menu filre........

        const menuFiltre = document.querySelectorAll(".choix p");
        
        //.......constantes pour vérifier le ciblage des données......
        /*const filtreLikes = media.likes;
        const filtreDate = media.date;
        const filtreTitre = media.title;
        console.log(filtreLikes);
        console.log(filtreDate);
        console.log(filtreTitre);*/
        //......................................................
        
        menuFiltre.forEach(filtre => {
            filtre.addEventListener("click",e => {
                switch (e.target.class) {
                    case "pop":
                        medias.sort (function (a,b) {
                        return b.likes - a.likes;
                        })
                    break
                        
                    case "date":
                        media.sort(function (a, b){
                        return b.date - a.date;
                        })
                    break
    
                    case "titre":
                        media.sort(function (a, b) {
                        return a.title - b.title;
                        })
                    break
                }
            })
        })
        }
    })
}
async function display(){                                              
    const {photographers, media} = await getPhotographers();  //créat de la const qui doit récupérer les données json  via la f. fetch
    displayData(photographers); 
    displayDataMedia(media);

    // applique la fonction displayData pour tous les photographes
    //const filtreLikes = media.likes;
    //console.log (filtreLikes)

}
display ();                         //applique la fonction display pour afficher les données demandées




//.............OUVERTURE ET FERMETURE DU MENU..............
const fermer = document.querySelector("#fermer");
const ouvert = document.querySelector("#ouvert");
const pop = document.querySelector(".pop");
const date = document.querySelector(".date");
const titre = document.querySelector(".titre");
const choix = document.querySelector(".choix");

ouvert.addEventListener("click",chevronOuvert);

function chevronOuvert (){
    fermer.style.display = "block";
    ouvert.style.display = "none";
    date.style.display = "block";
    titre.style.display = "block";
    choix.style.height = "160px";
}

fermer.addEventListener("click",chevronFermer);

function chevronFermer (){
    fermer.style.display = "none";
    ouvert.style.display = "block";
    date.style.display = "none";
    titre.style.display = "none";
    choix.style.height = "60px";
} 


