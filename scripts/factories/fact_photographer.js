//...............PAGE D'ACCUEIL.............
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
    h3.textContent = city +", "+ country;
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


//..............PAGE DU PHOTOGRAPHE...............
function photographerFactoryInfo(data){                                 
        
    function getUserMediaCardDOM() {                                     
      const {portrait, name, city, country, tagline} = data;
      const section = document.createElement("section");
      section.classList = "photographerHeader";
      
      const div = document.createElement("div")
      div.classList = "infosPhotographe";
      const h2 = document.createElement( "h2" );
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");

      h2.textContent = name;
      h3.textContent = city +", "+ country;
      h4.textContent = tagline;
      
      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(h4);

      const button = document.createElement ("div");
      button.innerHTML = `<button class="contact_button" onclick="displayModal()">Contactez-moi</button>`;

      const photoPhotographe = document.createElement ("div")
      photoPhotographe.classList = ("photo");
      const picture = `assets/photographers/${portrait}`;
      const img = document.createElement( "img" );
      img.setAttribute("src",picture);
      img.setAttribute("alt",name);

      section.appendChild(div);
      section.appendChild(button);
      section.appendChild(img);

      document.getElementById("titre_modal").innerHTML = // je cible l'id concerné et le texte déjà inscrit
      document.getElementById("titre_modal").innerHTML + "<br/>" + data.name; //je récupère le texte qui est présent dans id titre modal et j'y ajoute un retour à la ligne et le nom du photographe concerné

      return section;
    }
  return{getUserMediaCardDOM}
}