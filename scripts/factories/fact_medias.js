

function mediaFactory(data){                                 
        
    function getUserMediaDOM() {  
        
        //........CREATION ELEMENTS DOM DE LA PAGE DU PHOTOGRAPHE...........
        const {image, video, title, likes,date} = data;
        
        const carteMedia = document.createElement("article");
        carteMedia.classList.add ("carte_media");

        const lienMedia = document.createElement ("a");
        lienMedia.classList.add("lienPhoto");
        
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
            const photo = `assets/photographers/${image}`;
            const img = document.createElement( "img" );
            lienMedia.setAttribute("href", photo);
            img.setAttribute("src",photo);
            img.setAttribute("alt",title);
            carteMedia.appendChild(lienMedia);
            lienMedia.appendChild(img);
        }

        const infoPhoto = document.createElement("div");
        infoPhoto.classList.add("info_photo");
        carteMedia.appendChild(infoPhoto);

        const h2 = document.createElement( "h2" );
        const nbreLike = document.createElement("span");
        const coeur = document.createElement("i");
        coeur.className = "fas fa-heart";

        h2.textContent = title;
        nbreLike.textContent = likes;

        infoPhoto.appendChild(h2);
        infoPhoto.appendChild(nbreLike);
        infoPhoto.appendChild(coeur);

    //  MISE EN PLACE DE LA GESTION DES LIKES
        /*let likesArray = [];
        likesArray.pusch(media.likes);*/
        coeur.addEventListener("click", ajoutLike);
        function ajoutLike(){
            nbreLike.textContent++;
            const addition = (previousValue, currentValue)=> previousValue + currentValue;
            let totalMediasLikes = likesArray.reduce(addition);

            let totalLikes = document.getElementsByClassName("total_likes");
            totalLikes.innerHTML++;

            return totalMediasLikes
        }

        return carteMedia;
        
    }
    function getMediaLightboxDOM() {

        const mediaLightbox = document.createElement('div');
        mediaLightbox.classList.add ("mediaLightbox");
        mediaLightbox.innerHTML = `<img src="assets/photographers/${image}" alt="${title}">
        <h3>${title}</h3>`;

        return mediaLightbox
    }
    return{getUserMediaDOM, getMediaLightboxDOM }

}


//a revoir car je n'arrive pas a récupérer les données json

function bandeau(data){
    //const {likes,price} = data;
    
    const bandeauHtml = document.querySelector(".bandeau");
        
    const like = document.createElement("h4")
    const coeurb = document.createElement("i");
    const prix = document.createElement("h4");
    
    
    like.classList = "total_likes";
    like.textContent = "likes";
    coeurb.className = "fas fa-heart";
    prix.classList = "prix";
    prix.textContent = "price" + "/jour";
    
    bandeauHtml.appendChild(like);
    bandeauHtml.appendChild(coeurb);
    bandeauHtml.appendChild(prix);
    return bandeauHtml;
}
   
bandeau();
