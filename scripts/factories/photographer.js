//CREATION DU PATTERN D'UN PHOTOGRAPHE
class photographer{
    constructor(data){
        this._name = data.name
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._price = data.price
        this._portrait = data.portrait
    }
    get name(){
        return this._name
    }
}
// CREATION DES BALISES HTML NECESSAIRES POUR PAGE ACCUEIL


function photographerFactory(data) {
    const { portrait, name, city, country, tagline, price } = data;

    const picture = `data/photographers/${portrait}`;
    console.log (picture)

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src",picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement("h3");
        h3.textContent = city +" "+country;

        const h4 = document.createElement("h4");
        h4.textContent = tagline;

        const p = document.createElement("p");
        p.textContent = price + "€/jour";

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return (article);
    }
    return {getUserCardDOM }
}