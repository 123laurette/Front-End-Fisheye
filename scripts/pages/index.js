async function getPhotographers () {                                  //récupération du JSON
    let response = await fetch ("data/photographers.json")
    let photographers = await response.json()
    return photographers

    }
   
// CREATION DES CONSTANTES ET DES ELEMENTS AJOUTES DANS HTML ET QUI RECUPERENT LES INFOS JSON

    function photographerFactory(data){                                 //1ère fonction qui permet d'englober le return vers la fonction getUserCardDom
        
        function getUserCardDOM() {                                     //2ème fonction qui crée les constantes et les éléments
        const {portrait, name, city, country, tagline, price,id} = data;
        const picture = `assets/photographers/${portrait}`;
    
        
        const article = document.createElement( "article" );
        const img = document.createElement( "img" );
        const h2 = document.createElement( "h2" );
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");

      // CREATION DU LIEN ENTRE INDEX.HTML ET PHOTOGRAPHER.HTML
        article.addEventListener("click", ()=>{
        window.location.href=`photographer.html?id=${id}`;         
    //A REVOIR CAR LE LIEN DOIT ETRE SUR LA PHOTO ET LE NOM UNIQUEMENT 
        })  

        img.setAttribute("src",picture);
        h2.textContent = name;
        h3.textContent = city +" "+ country;
        h4.textContent = tagline;
        p.textContent = price + "€/jour";
        
        article.appendChild(img)
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return (article);
    }
    return{getUserCardDOM}
    }

    async function displayData(photographers) {                     // fonction qui cible l'endroit et fait apparaitre les nouveaux éléments
        const photographersSection = document.querySelector(".photographer_section"); 
          //cible l'endroit du DO

        photographers.forEach((photographer) => {                   //récupérer la réponse du JSON const photographer pour chaque photographe
            const photographerModel = photographerFactory (photographer,);//création de la constante qui récupère la 1ère fonction
            const userCardDOM = photographerModel.getUserCardDOM();         // création de la constante qui récupère la 1ère et la 2ème fonction
            photographersSection.appendChild(userCardDOM);
                             //Mise en place des 2 fonctions en tant qu'enfant
        });
    };

    async function display(){                                              //Fonction mettre en display le résultat de toutes les fonctions
        const {photographers} = await getPhotographers();               //const photographers récupère le tableau du JSON
        displayData(photographers);
    }
  display ()                                                               //Active la fonction init