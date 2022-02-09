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
        
    function getUserCardDOM() {                                     
      const {portrait, name, city, country, tagline} = data;
      const infosPhotographe = document.querySelector(".infos_photographe"); 

    
      const h2 = document.createElement( "h2" );
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");

      h2.textContent = name;
      h3.textContent = city +", "+ country;
      h4.textContent = tagline;
    
      infosPhotographe.appendChild(h2);
      infosPhotographe.appendChild(h3);
      infosPhotographe.appendChild(h4);
      
      const photoPhotographe = document.querySelector (".photo");
      const picture = `assets/photographers/${portrait}`;
      const img = document.createElement( "img" );
      img.setAttribute("src",picture);
      img.setAttribute("alt",name);
      photoPhotographe.appendChild(img);

      document.getElementById("titre_modal").innerHTML = // je cible l'id concerné et le texte déjà inscrit
      document.getElementById("titre_modal").innerHTML + "<br/>" + data.name; //je récupère le texte qui est présent dans id titre modal et j'y ajoute un retour à la ligne et le nom du photographe concerné

    }
  return{getUserCardDOM}
}