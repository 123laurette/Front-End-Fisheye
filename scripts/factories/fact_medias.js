class media {
    constructor(data) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._index = data.index
    }
    get id(){
        return this._id
    }
    get photographerId(){
        return this._photographerId
    }
    get title(){
        return this._title
    }
    get image(){
        return `assets/photographers/${this._image}`
    }
    get likes(){
        return this._like
    }
    get date(){
        return this._date
    }
    get price(){
        return this._price
    }
    get index(){
        return this._index
    }
}
async function getMedia(photographerId){
    const response = await fetch ("data/photographers.json")
    const medias = await response.json()
    console.log(medias)

    medias = medias.media
    
    return medias
}
console.log(medias)