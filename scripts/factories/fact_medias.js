

function mediaFactory(data){                                 
        
    function getUserMediaDOM() {  
        
        //........CREATION ELEMENTS DOM DE LA PAGE DU PHOTOGRAPHE...........
        const {image, video, title, likes,date} = data;
        const cartesMedias = document.querySelector(".cartes_medias");
        cartesMedias.innerHTML = "";
        const carteMedia = document.createElement("article");
        carteMedia.classList.add ("carte_media");
        cartesMedias.appendChild(carteMedia);
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
        const h3 = document.createElement("h3");
        const coeur = document.createElement("i");
        coeur.className = "fas fa-heart";

        h2.textContent = title;
        h3.textContent = likes;

        infoPhoto.appendChild(h2);
        infoPhoto.appendChild(h3);
        infoPhoto.appendChild(coeur);



        //........CREATION ELEMENTS DOM DE LA LIGHTBOX...........
        const lightbox = document.querySelector(".lightbox");
        const close = document.querySelector(".close i") ;
        const precedent = document.querySelector(".precedent i");
        const suivant = document.querySelector(".suivant i");
        const titreImage = document.querySelector(".titreImage");

        close.className = "far fa-times";
        precedent.className = "fas fa-angle-left";
        suivant.className = "fas fa-angle-right";
        titreImage.textContent = title;
        return lightbox
        }

    return{getUserMediaDOM}

}




    
//Bandeau a revoir car il ne veut pas des valeurs json

function bandeau(){
const bandeauHtml = document.querySelector(".bandeau");

bandeauHtml.classList = "bandeauPhotographer"

const h4b = document.createElement("h4")
const coeurb = document.createElement("i");
const h4 = document.createElement("h4");

h4b.classList = "total_likes";
h4b.textContent = "mettre le total";
coeurb.className = "fas fa-heart";
h4.classList = "prix";
h4.textContent = "prix" + "/jour";

bandeauHtml.appendChild(h4b);
bandeauHtml.appendChild(coeurb);
bandeauHtml.appendChild(h4);
}
bandeau();
