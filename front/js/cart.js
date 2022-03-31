"use strict";

// code a modifier :

/*
create element .... foreach
*/

// Regex a reviser
// Variables pour les saisies et les messages d'erreur pour le formulaire

let order = document.getElementById("order");

let firstName = document.getElementById("firstName");
let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
let regexFirstName = /[a-zA-Z]/;

let lastName = document.getElementById("lastName");
let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
let regexLastName =
  /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]/;

let address = document.getElementById("address");
let addressErrorMsg = document.getElementById("addressErrorMsg");
let regexAddress = /^[a-zA-Z0-9\s,'-]*$/;

let city = document.getElementById("city");
let cityErrorMsg = document.getElementById("cityErrorMsg");
let regexCity = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

let email = document.getElementById("email");
let emailErrorMsg = document.getElementById("emailErrorMsg");
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Gestion des erreurs pour le formulaire et tests lors de la validation

order.addEventListener("click", function () {
  console.log('Bouton "Commander !" cliqué');
  validationFirstName();
  validationLastName();
  validationAddress();
  validationCity();
  validationEmail();
});

// Gestion des messages à afficher en cas d'erreur

// Le code du mail est bon, vérifier le reste avec les regex à modifier

function validationFirstName() {
  if (regexFirstName.test(firstName.value)) {
    console.log("Le regex du prénom est passé");
    return true;
  } else {
    console.log("Le regex du prénom n'est pas passé");
    firstNameErrorMsg.textContent("Veuillez saisir un prénom correct");
    return false;
  }
}
function validationLastName() {
  if (regexLastName.test(lastName.value)) {
    console.log("Le regex du nom est passé");
    return true;
  } else {
    console.log("Le regex du nom n'est pas passé");
    emailErrorMsg.textContent = "Veuillez saisir un nom correct";
    return false;
  }
}
function validationAddress() {
  if (regexAddress.test(address.value)) {
    console.log("Le regex de l'adresse est passé");
    return true;
  } else {
    console.log("Le regex de l'adresse n'est pas passé");
    addressErrorMsg.textContent = "Veuillez saisir une adresse correcte";
    return false;
  }
}
function validationCity() {
  if (regexCity.test(city.value)) {
    console.log("Le regex de la ville est passé");
    return true;
  } else {
    console.log("Le regex de la ville n'est pas passé");
    cityErrorMsg.textContent = "Veuillez saisir une ville correcte";
    return false;
  }
}
function validationEmail() {
  if (regexEmail.test(email.value)) {
    console.log("Le regex du mail est passé");
    return true;
  } else {
    console.log("Le regex du mail n'est pas passé");
    emailErrorMsg.textContent = "Veuillez saisir un mail correct";
    return false;
  }
}
