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