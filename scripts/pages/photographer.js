//Mettre le code JavaScript lié à la page photographer.html

async function newgetPhotographers (data) {                                  //récupération du JSON
    let response = await fetch ("data/photographers.json")
    let photographers = await response.json()
    return photographers

}


async function newdisplayData(photographers) {                     
//cible l'endroit du DOM

    photographers.forEach((photographer) => {                   
        const newphotographerModel = newphotographerFactory (photographer);
        const newuserCardDOM = newphotographerModel.newgetUserCardDOM();        
    });
};

async function newdisplay(){                                              
    const {photographers} = await newgetPhotographers();                
    newdisplayData(photographers);
}
  newdisplay ()                                                               

