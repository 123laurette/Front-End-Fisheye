//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer (index) {                                  //récupération du JSON
    let response = await fetch ("data/photographers.json")
    let photographers = await response.json()
    console.log(photographers);
    let photographer = photographers.photographers[index]
    console.log(photographer);
    return photographer
    }


// CREATION DES CONSTANTES ET DES ELEMENTS AJOUTES DANS HTML ET QUI RECUPERENT LES INFOS JSON

    function newphotographerFactory(photographer){                                 //1ère fonction qui permet d'englober le return vers la fonction getUserCardDom
        
        function newgetUserCardDOM() {                                     //2ème fonction qui crée les constantes et les éléments
        const {name, city, country, tagline,id} = data;
    
        const h2 = document.createElement( "h2" );
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");

        h2.textContent = photographer.name;
        h3.textContent = photographer.city +" "+ photographer.country;
        h4.textContent = photographer.tagline;
        
        infosPhotographe.appendChild(h2);
        infosPhotographe.appendChild(h3);
        infosPhotographe.appendChild(h4);
        return (infosPhotographe);
    }
    return{newgetUserCardDOM}
    }

    async function newdisplayData(photographer) {                     // fonction qui cible l'endroit et fait apparaitre les nouveaux éléments
        const infosPhotographe = document.querySelector(".infos_photographe"); 
          //cible l'endroit du DO

        photographers.forEach((photographer) => {                   //récupérer la réponse du JSON const photographer pour chaque photographe
            const newphotographerModel = newphotographerFactory (photographer,);//création de la constante qui récupère la 1ère fonction
            const newuserCardDOM = newphotographerModel.newgetUserCardDOM();         // création de la constante qui récupère la 1ère et la 2ème fonction
            infosPhotographe.appendChild(newuserCardDOM);
                            //Mise en place des 2 fonctions en tant qu'enfant
        });
    };

    async function newdisplay(){                                              //Fonction mettre en display le résultat de toutes les fonctions
        const {photographer} = await getPhotographer();               //const photographers récupère le tableau du JSON
        newdisplayData(photographer);
    }
  newdisplay ()    
  
  //Active la fonction init
/*class photographer{
    constructor(data,index){
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
async function getPhotographer (data) {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json")
    const photographers = await response.json()
    const photographer = photographers.photographers[this.id]
    return photographers
    }
const photographerId = new URLSearchParams(window.location.search).get("photographer");
console.log(photographerId);

async function display(photographerId){
    const photographer = await getPhotographer(photographerId);

    const infosPhotographe = document.querySelector(".infos_photographe");

    const h2 = document.createElement( 'h2' );
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    

        h2.textContent = photographer.name;
        h3.textContent = photographer.city,photographer.country;
        h4.textContent = photographer.tagline;

            infosPhotographe.appendChild(h2);
            infosPhotographe.appendChild(h3);
            infosPhotographe.appendChild(h4);

}
display()
console.log(window.location.search);

const img = document.createElement( 'img' );
    const picture = `/assets/photographers/${photographer.portrait}`;
    img.setAttribute("src", picture);
                infosPhotographe.appendChild(img);
*/
