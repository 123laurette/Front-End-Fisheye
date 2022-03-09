const liensPhoto = document.getElementsByClassName("lienPhoto");
    console.log(liensPhoto);

// EVENEMENT AU CLICK SUR LA PHOTO

function EventdisplayLightbox() { 
    
    for(let i = 0; i < liensPhoto.length; i++) {
        
        liensPhoto.removeEventListener('click', e => {    
            e.preventDefault()
        });

        liensPhoto.addEventListener("click", e => {
            e.preventDefault();
            const newLightbox = "";
            newLightbox = (e.currentTarget.getAttribute("href"));
        })
    };
    
}


//FONCTION POUR LES ICONES

function precedent(){
    let i = this.liensPhoto;
    i = liensPhoto.length - 1;
}

function suivant(){
    let i = this.liensPhoto;
    i = liensPhoto.length + 1;
}

function close(){
    const fermeLightbox = document.querySelector(".lightbox");
    fermeLightbox.style.display = "none";
}


//CREATION ET ACTION DES BOUTONS LIGHTBOX
function creatIconeDomLightbox () {  

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const btnPrecedent = document.createElement("button");
    btnPrecedent.className = "precedent";
    btnPrecedent.setAttribute("aria-label", "image précédente");
    btnPrecedent.addEventListener("click", () => {
        precedent();
    });
    
    const btnSuivant = document.createElement("button");
    btnSuivant.className = "suivant";
    btnSuivant.setAttribute("aria-label", "image suivante");
    btnSuivant.addEventListener("click", () => {
        suivant();
    });

    const btnClose = document.createElement("button");
    btnClose.className = "close";
    btnClose.setAttribute("aria-label", "fermer la lightbox");
    btnClose.addEventListener("click", () => {
        close();
    });

    lightbox.appendChild(btnPrecedent);
    lightbox.appendChild(btnSuivant);
    lightbox.appendChild(btnClose);

    document.body.appendChild(lightbox);

}




function displayLightbox() { 
 //MISE EN PLACE DES FONCTIONS LIGHTBOX
EventdisplayLightbox();
creatIconeDomLightbox();
}

displayLightbox();

