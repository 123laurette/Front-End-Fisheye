function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}




// validation des champs de formulaire..........
let prenom = document.getElementById("first");
let prenomError = document.querySelector(".prenom_error");
prenom.addEventListener("change", validPrenom);

function validPrenom(inputFirst) {                           //création de la fonction
    let prenomV = new RegExp('^[a-zA-Z-\s]+$');                //Création de la Regex
    let testPrenom = prenomV.test(first.value)

    if (!testPrenom) {                                          //Condition si il y a une erreur
        prenomError.innerHTML ="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        prenomError.style.color = "red";
        prenomError.style.fontSize = "18px";
        return false;
    } else {
        prenomError.innerHTML ="";                                                    //Condition si c'est rempli correctement;
        return true;
    }
}
