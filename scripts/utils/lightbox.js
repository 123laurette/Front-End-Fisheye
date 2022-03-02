class Lightbox {

    static init(medias) {//Mise en place du ciblage, de l'évenement et de la creation d'élément dans le dom

        // Cible les liens a des photos et videos
        const links = document.getElementsByClassName("lienPhoto");
        console.log(links)
        
        links.forEach(link =>   //dans tous les liens, pour chaque lien
            link.addEventListener("click", e => {   //creation d'un évent click sur l'element

                e.preventDefault();  // stop comportement par défaut du lien

                // Affiche une Lightbox
                new Lightbox(e.currentTarget.getAttribute("href"));
            })
        )
    }


    constructor (media) {   // indique a quel endroit doit se mettre le buildDom
        
        const lightboxElement = this.buildDOM(media)
        const corp = document.querySelector("corp_lightbox");
        corp.appendChild(lightboxElement)
    }


    precedent(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url);
        if (i === 0) {
        i = this.images.lenght - 1;
        }
        this.loadImage(this.images[i - 1]);
    }
    suivant(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url);
        if (i === this.images.length - 1) {
        i = -1;
        }
        this.loadImage(this.images[i + 1]);
    }
    close (e){
        e.preventDefault() 
        this.element.classList.add("fadeOut")
        window.setTimeout(()=> {
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener("keyup", this.onKeyup)
    }

    // Construit la lightbox
    buildDOM () {
        const dom = document.createElement("div");
        dom.classList.add("lightbox");

        const btnPrecedent = document.createElement("button");
        btnPrecedent.classList.add ("precedent");
        btnPrecedent.addEventListener("click", precedent);

        const btnSuivant = document.createElement("button");
        btnSuivant.classList.add ("suivant");
        btnSuivant.addEventListener("click", suivant);

        const btnClose = document.createElement("button");
        btnClose.classList.add ("close");
        btnClose.addEventListener("click", close);

        dom.appendChild(btnPrecedent);
        dom.appendChild(btnSuivant);
        dom.appendChild(btnClose);

        document.addEventListener("keyup", onKeyup)//ecouteur evenement au clavier

        return dom
    }

    onKeyup (e){
        if (e.key === "escape") {
            this.close(e);
        }else if (e.key === "precedent") {
            this.precedent(e);
        }else if (e.key === "suivant") {
            this.suivant(e);
        }
    }
}
    Lightbox.init()
    
    


//..CETTE FONCTION A ETE MISE DANS FACT_MEDIAS.JS.....
//.. CREATION DU CONTENU DES IMAGES ET DU TITRE POUR RECUPERE LE JSON

    /*function getMediaLightboxDOM() {
        
        const mediaLightbox = document.createElement('div');
        mediaLightbox.classList.add ("mediaLightbox");
        mediaLightbox.innerHTML = `<img src="assets/photographers/${image}" alt="${title}">
        <h3>${title}</h3>`;

        return mediaLightbox
    }
    return{getUserMediaDOM, getMediaLightboxDOM }*/
