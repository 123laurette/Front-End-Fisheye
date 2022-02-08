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

const filters = document.querySelectorAll("#filter_elements p");
filters.forEach(filter => {
    filter.addEventListener("click", e => {
        switch(e.target.id) {
            case "filter_pop":
                photographerMedias.sort(function(a, b){
                    return b.likes - a.likes;
                })
            break

            case"filter_titre":
                pphotographerMedias.sort(function(a, b){
                    return a.title.localCompare(b.title);
                })
            break

            case "filter_date":
                photographerMedias.sort(function(a, b){
                    return new Date(b.date) - new Date(a.date);
            })
        break
        }
    })
})
