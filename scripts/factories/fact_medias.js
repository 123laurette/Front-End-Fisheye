

function mediaFactory(data){                                 
        
    function getUserMediaDOM() {                                     
        const {image, title, likes} = data;
        const cartesMedias = document.querySelector(".cartes_medias");
        
        const carteMedia = document.createElement("article");
        carteMedia.classList.add ("carte_media");
        cartesMedias.appendChild(carteMedia);
        
        const photo = `assets/photographers/${image}`;
        const img = document.createElement( "img" );
        img.setAttribute("src",photo);
        img.setAttribute("alt",title);
        carteMedia.appendChild(img);

        
        const infoPhoto = document.createElement("div");
        infoPhoto.classList.add("info_photo");
        carteMedia.appendChild(infoPhoto);

        const h2 = document.createElement( "h2" );
        const h3 = document.createElement("h3");
        const coeur = document.createElement("i");
        coeur.className = "fas fa-heart";

        h2.textContent = title;
        h3.textContent = likes;

        infoPhoto.appendChild(h2);
        infoPhoto.appendChild(h3);
        infoPhoto.appendChild(coeur);

        
    }
    return{getUserMediaDOM}
}