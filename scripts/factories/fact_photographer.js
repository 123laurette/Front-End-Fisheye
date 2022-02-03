class photographePattern{
    constructor(data,index){
        this._name = data.name
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._portrait = data.portrait
        this._index = index
    }
}
// CREATION DES CONSTANTES ET DES ELEMENTS AJOUTES DANS HTML ET QUI RECUPERENT LES INFOS JSON
const infosPhotographe = document.querySelector(".infos_photographe"); 
const photoPhotographe = document.querySelector(".photo");

function newphotographerFactory(data){
    function newgetUserCardDOM() {                                     
        const {portrait, name, city, country, tagline} = data;

        const h2 = document.createElement( "h2" );
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");

        h2.textContent = name;
        h3.textContent = city +" "+ country;
        h4.textContent = tagline;

        infosPhotographe.appendChild(h2);
        infosPhotographe.appendChild(h3);
        infosPhotographe.appendChild(h4);
        return (infosPhotographe);
    }
    return{newgetUserCardDOM}
}