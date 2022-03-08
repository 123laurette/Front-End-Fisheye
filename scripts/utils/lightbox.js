async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");  //appel du json
    const data = await response.json();   // recup des données du json
    return data;                           //  retourne les données json
}

//CREATION DES BOUTONS LIGHTBOX
function creatDomLightbox () {  

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const btnPrecedent = document.createElement("button");
    btnPrecedent.className = "precedent";
    btnPrecedent.setAttribute("aria-label", "image précédente");
    btnPrecedent.style.background = "url(/assets/icons/chevron.svg) center center / 100% 100% no-repeat";

    const btnSuivant = document.createElement("button");
    btnSuivant.className = "suivant";
    btnSuivant.setAttribute("aria-label", "image suivante");
    btnSuivant.style.background = "url(/assets/icons/chevron.svg) center center / 100% 100% no-repeat";


    const btnClose = document.createElement("button");
    btnClose.className = "close";
    btnClose.setAttribute("aria-label", "fermer la lightbox");
    btnClose.style.background = "url(/assets/icons/close_lightbox.svg)     background : center center / 100% 100% no-repeat transparent";

    lightbox.appendChild(btnPrecedent);
    lightbox.appendChild(btnSuivant);
    lightbox.appendChild(btnClose);

    document.body.appendChild(lightbox);

}

//CREATION DE IMAGE ET TITRE LIGHTBOX
function getMediaLightboxDOM(data) {    
    const {image, video, title} = data
    const lightbox = document.querySelector(".lightbox");
    const mediaLightboxDiv = document.createElement('div');
    mediaLightboxDiv.id = "lightbox_media";

    const lienMedia = document.createElement ("a");
        
    if("video" in data){
        const photoVideo = document.createElement("video");
        const mp4 = `assets/photographers/${video}`;
        const source = document.createElement("source");
        
        lienMedia.setAttribute("href", mp4);
        source.setAttribute("src",mp4);
        source.setAttribute("alt", title);
        source.setAttribute("type", "video/mp4");
        lienMedia.appendChild(photoVideo);
        photoVideo.appendChild(source);
    }
    else {
        const img = document.createElement( "img" );
        const photo = `assets/photographers/${image}`;

        lienMedia.setAttribute("href", photo);
        img.setAttribute("src",photo);
        img.setAttribute("alt", "photo" + " " +title);
        lienMedia.appendChild(img);
    }
    lienMedia.className ="lienPhoto";

    mediaLightboxDiv.appendChild(lienMedia);
    lightbox.appendChild(mediaLightboxDiv);

}


async function displayLightbox() { 
    const liensPhoto = document.getElementsByClassName("lienPhoto");
    console.log(liensPhoto);

    for(let i = 0; i > liensPhoto.length; i++){
        liensPhoto.addEventListener('click', e => {    // EVENEMENT AU CLICK SUR LA PHOTO
            e.preventDefault()
        })
    }
     //MISE EN PLACE DES FONCTIONS LIGHTBOX
    const {media} = await getPhotographers();
    console.log(media)  ;
    creatDomLightbox();
    getMediaLightboxDOM(media);
}

displayLightbox();




