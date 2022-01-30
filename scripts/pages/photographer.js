//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer () {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json")
    const photographers = await response.json()
    return photographers
    }
const photographerId = new URLSearchParams(window.location.search).get("id");
console.log(photographerId);

async function display(photographerId){
    const photographer = await getPhotographer(photographerId);

    const infosPhotographe = document.querySelector(".infos_photographe");

    const h2 = document.createElement( 'h2' );
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const img = document.createElement( 'img' );
    const picture = `/assets/photographers/${photographer.portrait}`;

        img.setAttribute("src", picture);
        h2.textContent = photographer.name;
        h3.textContent = photographer.city,photographer.country;
        h4.textContent = photographer.tagline;

            infosPhotographe.appendChild(img);
            infosPhotographe.appendChild(h2);
            infosPhotographe.appendChild(h3);
            infosPhotographe.appendChild(h4);

}
display()
console.log(window.location.search);

