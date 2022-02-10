

function mediaFactory(data){                                 
        
    function getUserMediaDOM() {                                     
        const {image, title, likes} = data;
        const carteMedia = document.querySelector(".carte_media"); 
        
        const photo = `assets/photographers/${image}`;
        const img = document.createElement( "img" );
        img.setAttribute("src",photo);
        img.setAttribute("alt",title);
        carteMedia.appendChild(img);

        const infoPhoto = documment.createElement("div");
        infoPhoto.classList.add("info_photo");
        const h2 = document.createElement( "h2" );
        const h3 = document.createElement("h3");
        const coeur = document.createElement("i")
        coeur.classList.add("fas fa-heart")

        h2.textContent = title;
        h3.textContent = likes;
        
        
        carteMedia.appendChild("infoPhoto");
        infoPhoto.appendChild(h2);
        infoPhoto.appendChild(h3);
        infoPhoto.appendChild(i);

        
    }
    return{getUserMediaDOM}
}