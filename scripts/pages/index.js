async function getPhotographers () {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json")
    const photographers = await response.json()
    return photographers
}

async function displayData(photographers) {                     // fonction qui cible l'endroit et fait apparaitre les nouveaux éléments
  const photographersSection = document.querySelector(".photographer_section"); 
          //cible l'endroit du DO

  photographers.forEach((photographer) => {                   //récupérer la réponse du JSON const photographer pour chaque photographe
    const photographerModel = photographerFactory (photographer);//création de la constante qui récupère la 1ère fonction
    const userCardDOM = photographerModel.getUserCardDOM();         // création de la constante qui récupère la 1ère et la 2ème fonction
    photographersSection.appendChild(userCardDOM);
                             //Mise en place des 2 fonctions en tant qu'enfant
  });
};

async function display(){                                              //Fonction mettre en display le résultat de toutes les fonctions
  const {photographers} = await getPhotographers();               //const photographers récupère le tableau du JSON
  displayData(photographers);
}
display () 



window.onload = function() {
  document.querySelector("img").focus;
}
