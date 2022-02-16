

function mediaFactory(data){                                 
        
    function getUserMediaDOM() {                                     
        const {image, video, title, likes} = data;
        const cartesMedias = document.querySelector(".cartes_medias");
        
        const carteMedia = document.createElement("article");
        carteMedia.classList.add ("carte_media");
        cartesMedias.appendChild(carteMedia);
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

    }
    return{getUserMediaDOM}
}


//Bandeau a revoir car il ne veut pas des valeurs json

function bandeau(){
const bandeauHtml = document.querySelector(".bandeau");
console.log(bandeauHtml);
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
