//Mettre le code JavaScript lié à la page photographer.html

function pagePhotographe(data) {
    const { portrait, name, city, country, tagline } = data;
    const picture = `assets/photographers/${portrait}`;
    const img = document.createElement( 'img' );
    const h2 = document.createElement( 'h2' );
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

        img.setAttribute("src",picture)
        h2.textContent = name;
        h3.textContent = city +" "+ country;
        h4.textContent = tagline;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        return (pagePhotographe);
}

async function displayPhotographe(photographers) {
    const infosPhotographe = document.querySelector(".infos_photographe");

    photographers.forEach((photographer) => {
        const pagePhotographe = pagePhotographe();
        infosPhotographe.appendChild(pagePhotographe);
    });
};





