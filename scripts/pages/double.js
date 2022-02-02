 
  
async function getPhotographer (data) {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json")
    const photographers = await response.json()
    console.log(photographers);
    const photographer = photographers.photographePattern;
    
    return photographers
}

const photographerId = new URLSearchParams(window.location.search).get("index");
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

}
display()


/*async function getPhotographer (index) {                                  //récupération du JSON
    let response = await fetch ("data/photographers.json")
    let photographers =  await response.json()
    console.log(photographers);
    return photographers
    }

class photographePattern{
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
// CREATION DES CONSTANTES ET DES ELEMENTS AJOUTES DANS HTML ET QUI RECUPERENT LES INFOS JSON

async function newphotographerFactory(photographePattern){                                 //1ère fonction qui permet d'englober le return vers la fonction getUserCardDom
        
    async function newgetUserCardDOM(data) {                                     //2ème fonction qui crée les constantes et les éléments
        const {name, city, country, tagline,id} = data;
        const photographerId = new URLSearchParams(window.location.search).get("${this._id}");
        //await this.fetchData(id)
        console.log(photographerId);
    
        const h2 = document.createElement( "h2" );
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");

        h2.textContent = this._name;
        h3.textContent = this._city +" "+ this._country;
        h4.textContent = this._tagline;
    
        infosPhotographe.appendChild(h2);
        infosPhotographe.appendChild(h3);
        infosPhotographe.appendChild(h4);
        return (infosPhotographe);
    }
return{newgetUserCardDOM}
}

async function newdisplayData(photographePattern) {                     // fonction qui cible l'endroit et fait apparaitre les nouveaux éléments
    const infosPhotographe = document.querySelector(".infos_photographe"); 
      //cible l'endroit du DO

    photographePattern.forEach(data)                   //récupérer la réponse du JSON const photographer pour chaque photographe
        const newphotographerModel = newphotographerFactory (photographePattern);//création de la constante qui récupère la 1ère fonction
        const newuserCardDOM = newphotographerModel.newgetUserCardDOM();         // création de la constante qui récupère la 1ère et la 2ème fonction
        infosPhotographe.appendChild(newuserCardDOM);
        i++;
};

async function newdisplay(){                                              //Fonction mettre en display le résultat de toutes les fonctions
    const {photographePattern} = await getPhotographer();               //const photographers récupère le tableau du JSON
    newdisplayData(photographePattern);
}
newdisplay () */   