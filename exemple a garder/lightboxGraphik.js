class Lightbox {

    static init () {  // permet d'agir sur chaque photo
        const links = Array.from(document.querySelectorAll(`a [href$=".png"], a [href$=".jpg"], a [href$=".jpeg"]`))
        const images = links.map(link => link.getAttribute("href"))

            links.forEach(link => link.addEventListener("click", e => {

                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute("href"), gallery)
            }))
    }
    // string url de l'image
    //string[] gallery des images
    constructor(url, images) {
        const element = this.buildDOM(url)
        this.images = images
        this.onKeyup = this.onKeyup.bind(this)
        document.body.appendChild(element)
        document.addEventListener("keyup", this.onKeyup)
    }

    onKeyup (e){
        if (e.key === "escape") {
            this.close(e)
        }else if (e.key === "ArrowLeft") {
            this.precedent(e)
        }else if (e.key === "ArrowRight") {
            this.suivant(e)
        }
    }
    // ferme la lightbox
    close (e){
        e.preventDefault() 
        this.element.classList.add("fadeOut")
        window.setTimeout(()=> {
        this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener("keyup", this.onKeyup)
    }

    suivant(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if (i === this.images.length - 1) {
            i = -1
        }
        this.loadImage(this.images[i + 1])
    }

    precedent(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if (i === 0) {
            i = this.images.lenght - 1
        }
        this.loadImage(this.images[i - 1])
    }




    // string url de l'image
    // return element HTML

    buildDOM (url) {
        const dom = document.createElement("div")
        dom.classList.add("lightbox")
        dom.innerHTML = `<button class="precedent">precedent</button>
        <div class="photoLightbox">
            <img src="${url}"  alt="">
            <h3 class="titreImage">animal majesty</h3>
        </div>
        <button class="suivant"><i></i>suivant</button>
        <button class="close">fermer</button>
        </div>`
        dom.querySelector("close").addEventListener("click", this.close.bind(this))
        dom.querySelector("suivant").addEventListener("click", this.suivant.bind(this))
        dom.querySelector("precedent").addEventListener("click", this.precedent.bind(this))
    return dom
    }

}

Lightbox.init ();   // met en place la fonction init
 





