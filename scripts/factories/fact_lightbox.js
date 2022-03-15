//CREATION ELEMENTS DOM POUR LA LIGHTBOX

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);


 //CREATION DES BOUTONS LIGHTBOX

 function createIconeLightboxDom (){ //appelée dans photographer.js/ display()

    const btnPrecedent = document.createElement("button");
    btnPrecedent.setAttribute("onclick", "mediaNav(-1)");
    btnPrecedent.className = "precedent";
    btnPrecedent.textContent ="image precedente";
    btnPrecedent.setAttribute("aria-label", "image précédente");
    lightbox.appendChild(btnPrecedent);

    const btnSuivant = document.createElement("button");
    btnSuivant.setAttribute("onclick", "mediaNav(1)");
    btnSuivant.className = "suivant";
    btnSuivant.textContent = "image suivante";
    btnSuivant.setAttribute("aria-label", "image suivante");
    lightbox.appendChild(btnSuivant);

    const btnClose = document.createElement("button");
    btnClose.className = "close";
    btnClose.setAttribute("aria-label", "fermer la lightbox");
    btnClose.textContent = "fermer la lightbox";
    lightbox.appendChild(btnClose);
    btnClose.addEventListener("click", close);

}



    // CREATION IMAGE ET TITRE LIGHTBOX

function createMediaLightboxDom (data){ //appelée dans photographer.js/displayDataMedia()

    const mediaLightbox = document.createElement('div');
    mediaLightbox.className = "lightbox_media";
    const lien = document.createElement("a");

    const {title, image, video } = data

    if("video" in data){
        const photoVideo = document.createElement("video");
        const mp4 = `assets/photographers/${video}`;
        const source = document.createElement("source");

        photoVideo.setAttribute("controls", " ");
        lien.setAttribute("href",mp4);
        source.setAttribute("src",mp4);
        source.setAttribute("alt", title);
        source.setAttribute("type", "video/mp4");
        photoVideo.appendChild(source);
        lien.appendChild(photoVideo);
        mediaLightbox.appendChild(lien);
    }
    else {
        const img = document.createElement( "img" );
        const photo = `assets/photographers/${image}`;
        lien.setAttribute("href", photo);
        img.setAttribute("src",photo);
        img.setAttribute("alt", "photo" + " " +title);
        lien.appendChild(img);
        mediaLightbox.appendChild(lien);
    }

    const titrePhotoLightbox = document.createElement("h3");
    titrePhotoLightbox.className ="titreLightbox";
    titrePhotoLightbox.textContent = title;

    lightbox.appendChild(mediaLightbox);
    mediaLightbox.appendChild(titrePhotoLightbox);
}


