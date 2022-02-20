




// validation des champs de formulaire..........

// VERIFICATION NOM

let prenom = document.getElementById("first");
prenom.addEventListener("change", validPrenom);

function validPrenom(inputFirst) {                           
    let prenomV = new RegExp('^[a-zA-Z-\s]+$');                
    let testPrenom = prenomV.test(first.value)

    if (!testPrenom) { 
        prenom.parentElement.setAttribute("data-error-visible", "true");
        prenom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
        return false;
    } else {
        prenom.parentElement.setAttribute("data-error-visible", "false");
        prenom.parentElement.setAttribute("data-error", "");                                        
        return true;
    }
}
// VERIFICATION NOM

let nom = document.getElementById("last");
nom.addEventListener("change", validNom);

function validNom(inputLast) {
    let nomV = new RegExp('^[a-zA-Z-\s]+$');
    let testNom = nomV.test(last.value);

    if (!testNom) {
        nom.parentElement.setAttribute("data-error-visible", "true");
        nom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
    } else {
        nom.parentElement.setAttribute("data-error-visible", "false");
        nom.parentElement.setAttribute("data-error", "");
    return true;
    }
}
// VERIFICATION EMAIL

let email = document.getElementById("email");
email.addEventListener("change", validEmail);

function validEmail(inputEmail) {
    let emailV = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    let testEmail = emailV.test(email.value)

    if (!testEmail) {
        email.parentElement.setAttribute("data-error-visible", "true");
        email.parentElement.setAttribute("data-error", "Veuillez vérifier votre adresse éléctronique.");
    return false;
    } else {
        email.parentElement.setAttribute("data-error-visible", "false");
        email.parentElement.setAttribute("data-error", "");
    return true;
    }
}

// OUVERTURE ET FERMETURE FORMULAIRE
let modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}

//VALIDATION FORMULAIRE GLOBAL

/*let btnEnvoyer = document.getElementById("envoyer");
btnEnvoyer.addEventListener("click", validFormulaire);

function validFormulaire() {                                    
    if (validPrenom() & validNom() & validEmail()) {
        closeModal();
    }
}*/

//************************************************************** */
  // reste a faire la validation globale et le retour vers la page d'accueil
  // et revoir l'endroit du message pour que cela prenne plusieurs lignes.
//************************************************************* */
