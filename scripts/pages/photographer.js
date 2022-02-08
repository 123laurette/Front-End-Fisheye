

async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json")
    const photographers = await response.json()
    return photographers
}

let url = new URL(window.location.href);
let photographerId = url.searchParams.get("id");

function displayData(photographers) {                      

    photographers.forEach((photographerId => {
 
        const photographerModel = photographerFactory (photographerId);
        const userCardDOM = photographerModel.getUserCardDOM(); 
    }))
}

async function display(photographerId){                                              
    const {photographers} = await getPhotographers(photographerId);
    if (photographers.id == photographerId); 

    displayData(photographers);
}
display (photographerId)                              
