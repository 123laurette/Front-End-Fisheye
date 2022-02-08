class photographe{
    constructor(data){
        this._name = data.name
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._portrait = data.portrait
    }
    get name(){
        return this._name
    }
    get id(){
        return this._id
    }
    get city(){
        return this._city
    }
    get country(){
        return this._country
    }
    get tagline(){
        return this._tagline
    }
    get portrait(){
        return `/assets/photographers/${this._portrait}`
    }
}
async function getPhotographer (id) {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json")
    const photographers = await response.json()
    console.log(photographers);

    const photographer = photographers.photographers[id];
    
    return photographer
}

const photographerId = new URLSearchParams(window.location.search).get("id");
console.log(photographerId);


async function display(photographerId){
    const photographer = await getPhotographer(photographerId);

    const infosPhotographe = document.querySelector(".infos_photographe");

    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    

        h2.textContent = this._name;
        h3.textContent = this._city,this._country;
        h4.textContent = this._tagline;

            infosPhotographe.appendChild(h2);
            infosPhotographe.appendChild(h3);
            infosPhotographe.appendChild(h4);

    //const photoPhotographe = document.querySelector(".photo");
    //const picture = `assets/photographers/${this._portrait}`;
    //console.log(picture)

    //const img = document.createElement("img");
        //img.setAttribute("src", picture);
            //photoPhotographe.appendChild(img);       

}
display()
