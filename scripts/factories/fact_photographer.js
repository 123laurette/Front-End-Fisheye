class Photographer {
    constructor() {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
        this.index = index
    }
  }
  
async function getPhotographers(index){
    const resultat = await fetch ("data/photographers.json")
    const photographers = await resultat.json()
    const photographer = photographers.photographers[index]
    return photographer
}

async function getMedias(photographer){
    const resultatMedias = await fetch ("data/photographers.json")
    let medias = await resultatMedias.json()
    medias = medias.media

    let likesArray = []

    let photographerMedias = []

    const photographerMediasSection = document.querySelector(".medias-display");

    let i = 0;

    medias.forEach(media => {
        if (media.photographerId == `photographer.${this.id}`){
            console.log(photographerId)
            

            const photographerMedia = new mediasFactory(media);

            const mediaCardDom =photographerMedia.getMediaCardDom();
            photographerMediasSection.appendChild(mediaCardDom);

            likesArray.push(media.likes);
            photographerMedias.push(media);
            i++
            
        }
    })
};


async function init(photographerId){
    const photographer = await getPhotographers(photographerId);
    const medias = await getMedias(photographer);

    const photographHeader = document.querySelector(".photograph-header");
    const contactButton = document.querySelector("#contact_button");
    const photographerHeaderDiv = document.createElement("div");
    photographHeader.insertBefore(photographerHeaderDiv, contactButton);

    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    const h3 = document.createElement("h3");
    h3.textContent = this.city + this.country;
    const h4 = document.createElement("h4");
    h4.textContent = this.tagline;
    
    photographerHeaderDiv.appendChild(h2);
    photographerHeaderDiv.appendChild(h3);
    photographerHeaderDiv.appendChild(h4);

    const picture = `assets/photographers/${this.portrait}`;

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    photographHeader.appendChild(img);
    console.log(picture)
}
const photographerId = new URLSearchParams(window.location.search).get("id");
console.log(photographerId);

init(photographerId);