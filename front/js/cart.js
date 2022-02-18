// Variables pour les saisies et les messages d'erreur pour le formulaire

let order = document.getElementById('order');

let firstName = document.getElementById('firstName');
let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
let regexFirstName = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]/;

let lastName = document.getElementById('lastName');
let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
let regexLastName = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]/;

let address = document.getElementById('address');
let addressErrorMsg = document.getElementById('addressErrorMsg');
let regexAddress = /^[a-zA-Z0-9\s,'-]*$/;

let city = document.getElementById('city');
let cityErrorMsg = document.getElementById('cityErrorMsg');
let regexCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

let email = document.getElementById('email');
let emailErrorMsg = document.getElementById('emailErrorMsg');
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Gestion des erreurs pour le formulaire lors de la validation

order.addEventListener('click', function(){
    console.log('Bouton "Commander !" cliqué');
    validationFirstName();
    validationLastName();
    validationAddress();
    validationCity()
    validationEmail()
});

// Gestion des messages à afficher en cas d'erreur

function validationFirstName(){
    
    if (regexFirstName.test(firstName.value)){ 
        console.log("Le regex du prénom est passé")
        return (true)
  }
    else {
        console.log("Le regex du prénom n'est pas passé")
        return (false)
  }
}
function validationLastName(){
    
    if (regexLastName.test(lastName.value)){ 
        console.log("Le regex du nom est passé")
        return (true)
  }
    else {
        console.log("Le regex du nom n'est pas passé")
        return (false)
  }
}
function validationAddress(){
    
    if (regexAddress.test(address.value)){ 
        console.log("Le regex de l'adresse est passé")
        return (true)
  }
    else {
        console.log("Le regex de l'adresse n'est pas passé")
        return (false)
  }
}
function validationCity(){
    
    if (regexCity.test(city.value)){ 
        console.log("Le regex de la ville est passé")
        return (true)
  }
    else {
        console.log("Le regex de la ville n'est pas passé")
        return (false)
  }
}
function validationEmail(){
    
    if (regexEmail.test(email.value)){ 
        console.log("Le regex du mail est passé")
        return (true)
  }
    else {
        console.log("Le regex du mail n'est pas passé")
        return (false)
  }
}