
    function lien(medias) {
        const links = document.querySelectorAll(".lienPhoto");             // cible la classe correspondant aux photos
        console.log(links)
        
        links.forEach(link => {                                            // Pour chaque media cliqué, j'annule le lien existant et créé une lightbox associée au media
            link.addEventListener('click', e => {
                e.preventDefault()  
                const photo = document.querySelector(".photoLightbox img");
                console.log(photo) 
                photo = this.image;
            })
        })
    }


    const buttonClose = document.querySelector(".close");
    buttonClose.addEventListener("click", close);
    const lightbox = document.querySelector(".lightbox");
    
    function close(){
        lightbox.style.display = "none";
    }

    function suiv() {
        const buttonSuivant = document.querySelector(".suivant");
        buttonSuivant.addEventListener("click", suivant);
        let i = 0;
        i++;
    }

    function prec() {
        const buttonPrecedent = document.querySelector(".precedent");
        buttonPrecedent.addEventListener("click", precedent);
        let i = 0;
        i--;
    }


function displayLightbox(){
    
    lightbox.style.display = block
    lien (medias);
    close();
    suiv();
    prec();
}


 




