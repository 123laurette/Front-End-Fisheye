

function mediaFactory(data){                                 
        
    function getUserMediaDOM() {                                     
        const {image, title, likes} = data;
        const images = document.querySelector(".images"); 

    
        const h2 = document.createElement( "h2" );
        const h3 = document.createElement("h3");

        h2.textContent = title;
        h3.textContent = likes;
    
        images.appendChild(h2);
        images.appendChild(h3);

        const photo = `assets/photographers/${image}`;
        const img = document.createElement( "img" );
        img.setAttribute("src",photo);
        img.setAttribute("alt",title);
        images.appendChild(img);
    }
    return{getUserMediaDOM}
}