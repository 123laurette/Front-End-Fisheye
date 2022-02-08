

async function getPhotographers (id) {                                  
    const response = await fetch ("data/photographers.json")
    const photographers = await response.json()
    const photographer = photographers.photographers[id];
    return photographers
}

let url = new URL(window.location.href);
let photographerId = url.searchParams.get("id");

async function displayData(photographers) {                      
  const infosPhotographe = document.querySelector(".infos_photographe"); 
          //cible l'endroit du DO

  photographers.forEach((photographerId) => {                   
    const photographerModel = photographerFactory (photographerId);
    const userCardDOM = photographerModel.getUserCardDOM(); 
  });
};

async function display(photographerId){                                              
  const {photographers} = await getPhotographers(photographerId);               
  displayData(photographers);
}
display (photographerId)                              
