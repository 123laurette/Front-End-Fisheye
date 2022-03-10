

function mediaFactory(data){                                 
        
    function getUserMediaDOM() {  
        
        //........CREATION ELEMENTS DOM DE LA PAGE DU PHOTOGRAPHE...........
        const {image, video, title, likes,date,id} = data;
        
        const carteMedia = document.createElement("article");
        carteMedia.classList.add ("carte_media");

        const lienMedia = document.createElement ("a");
        
        if("video" in data){
            const photoVideo = document.createElement("video");
            const mp4 = `assets/photographers/${video}`;
            const source = document.createElement("source");
            
            lienMedia.setAttribute("href", mp4);
            source.setAttribute("src",mp4);
            source.setAttribute("alt", title);
            source.setAttribute("type", "video/mp4");

            carteMedia.appendChild(lienMedia);
            lienMedia.appendChild(photoVideo);
            photoVideo.appendChild(source);
        }
        else {
            const img = document.createElement( "img" );
            const photo = `assets/photographers/${image}`;

            lienMedia.setAttribute("href", photo);
            img.setAttribute("src",photo);
            img.setAttribute("alt", "photo" + " " +title);

            carteMedia.appendChild(lienMedia);
            lienMedia.appendChild(img);
        }
        lienMedia.className ="lienPhoto";

        const infoPhoto = document.createElement("div");
        infoPhoto.classList.add("info_photo");
        carteMedia.appendChild(infoPhoto);

        const h2 = document.createElement( "h2" );
        const nbreLike = document.createElement("span");
        const spanCoeur = document.createElement("span");
        spanCoeur.className = "coeur";
        const coeur = document.createElement("i");
        coeur.className = "fas fa-heart";
        coeur.setAttribute("aria-label", "likes");

        h2.textContent = title;
        nbreLike.textContent = likes;

        infoPhoto.appendChild(h2);
        infoPhoto.appendChild(nbreLike);
        spanCoeur.appendChild(coeur);
        infoPhoto.appendChild(spanCoeur);


        
        // CREATION IMAGE ET TITRE LIGHTBOX
        const lightbox = document.querySelector(".lightbox");
        const mediaLightbox = document.createElement('div');
        mediaLightbox.className = "lightbox_media";
        const lienMediaLightbox = document.createElement ("a");

        if("video" in data){
            const photoVideo = document.createElement("video");
            const mp4 = `assets/photographers/${video}`;
            const source = document.createElement("source");
            
            lienMediaLightbox.setAttribute("href", mp4);
            source.setAttribute("src",mp4);
            source.setAttribute("alt", title);
            source.setAttribute("type", "video/mp4");

            lienMediaLightbox.appendChild(photoVideo);
            photoVideo.appendChild(source);
        }
        else {
            const img = document.createElement( "img" );
            const photo = `assets/photographers/${image}`;

            lienMediaLightbox.setAttribute("href", photo);
            img.setAttribute("src",photo);
            img.setAttribute("alt", "photo" + " " +title);

            lienMediaLightbox.appendChild(img);
        }
            
        mediaLightbox.appendChild(lienMediaLightbox);
        lightbox.appendChild(mediaLightbox);

        const titrePhotoLightbox = document.createElement("h3");
        titrePhotoLightbox.className ="titreLightbox";
        titrePhotoLightbox.textContent = title;
        mediaLightbox.appendChild(titrePhotoLightbox);



        return carteMedia;
    }
    return{getUserMediaDOM}

}


function bandeau(){
    
    const bandeauHtml = document.querySelector(".bandeau");
        
    const like = document.createElement("h4")
    const coeurb = document.createElement("i");
    const prix = document.createElement("h4");
    
    like.id = "total_likes";
    coeurb.className = "fas fa-heart";
    prix.id = "prix";
    
    bandeauHtml.appendChild(like);
    bandeauHtml.appendChild(coeurb);
    bandeauHtml.appendChild(prix);
    return bandeauHtml;
}
    
bandeau();
