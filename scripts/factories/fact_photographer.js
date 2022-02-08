
function photographerFactory(data){                                 
        
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
      photoPhotographe.appendChild(img)

    }
  return{getUserCardDOM}
}