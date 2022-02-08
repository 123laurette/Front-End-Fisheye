

async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");
    const data = await response.json();
    return data;
}

let url = new URL(window.location.href);
let photographerId = url.searchParams.get("id");

function displayData(photographers) {                      

    photographers.forEach(photographer=> {
        if (photographer.id == photographerId){

        const photographerModel = photographerFactory (photographer);
        const userCardDOM = photographerModel.getUserCardDOM(); 
    }});
}

async function display(){                                              
    const {photographers, media} = await getPhotographers();
    displayData(photographers);
}
display ();                              
/*async function getMedia(){
    const response = await fetch ("data/photographers.json")
    const medias = await response.json()
    medias = medias.media
}*/