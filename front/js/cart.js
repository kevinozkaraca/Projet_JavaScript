"use strict";

//Recuperation du localStorage
let produitsDansLePanier = JSON.parse(localStorage.getItem("cart"));

// Recuperation du lien d'arrive et message en cas d'erreur
if (!localStorage.cart) {
  const formulaire = document.querySelector("section");
  const textVotrePanier = document.querySelector("H1");
  console.log("Formulaire cache car pas d'article");
  textVotrePanier.innerText = "Votre panier est vide";
  formulaire.style.display = "none";
} else {
  for (let cart in produitsDansLePanier) {
    //Creattion des elements utiles
    const baliseArticle = document.createElement("article");
    const creationDeDiv1 = document.createElement("div");
    const creationDeDiv2 = document.createElement("div");
    const creationDeDiv3 = document.createElement("div");
    const creationDeDiv4 = document.createElement("div");
    const creationDeDiv5 = document.createElement("div");
    const creationDeDiv6 = document.createElement("div");
    const IMGproduit = document.createElement("img");
    const nomDuProduit = document.createElement("h2");
    const paraCouleur = document.createElement("p");
    const paraPrix = document.createElement("p");
    const paraQuantite = document.createElement("p");
    const inputQuantite = document.createElement("input");
    const paraSUp = document.createElement("p");
    const ciblageDuContenu = document.querySelector("section");
    // Affichage des elements
    /*
              <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    div1        <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
    div2        <div class="cart__item__content">
    div3          <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>
    div4          <div class="cart__item__content__settings">
    div5            <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
    div6            <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> 
    */
    ciblageDuContenu.appendChild(baliseArticle);
    baliseArticle.setAttribute("class", "cart__item");
    baliseArticle.setAttribute("data-id", produitsDansLePanier[cart].id);
    baliseArticle.setAttribute("data-color", produitsDansLePanier[cart].color);
    baliseArticle.appendChild(creationDeDiv1);
    creationDeDiv1.setAttribute("class", "cart__item__img");
    creationDeDiv1.appendChild(IMGproduit);
    IMGproduit.setAttribute("src", produitsDansLePanier[cart].image);
    IMGproduit.setAttribute("alt", produitsDansLePanier[cart].textAlt);
    baliseArticle.appendChild(creationDeDiv2);
    creationDeDiv2.setAttribute("class", "cart__item__content");
    creationDeDiv2.appendChild(creationDeDiv3);
    creationDeDiv3.setAttribute("class", "cart__item__content__description");
    creationDeDiv3.appendChild(nomDuProduit);
    nomDuProduit.innerText = produitsDansLePanier[cart].nomProd;
    creationDeDiv3.appendChild(paraCouleur);
    paraCouleur.innerText = produitsDansLePanier[cart].color;
    creationDeDiv3.appendChild(paraPrix);
    paraPrix.innerText = produitsDansLePanier[cart].prix;
    creationDeDiv2.appendChild(creationDeDiv4);
    creationDeDiv4.setAttribute("class", "cart__item__content__settings");
    creationDeDiv4.appendChild(creationDeDiv5);
    creationDeDiv5.setAttribute("class", "cart__item__content__settings__quantity");
    creationDeDiv5.appendChild(paraQuantite);
    paraQuantite.innerText = produitsDansLePanier[cart].quantity;
    creationDeDiv5.appendChild(inputQuantite);
    inputQuantite.setAttribute("type", "number");
    inputQuantite.setAttribute("class", "itemQuantity");
    inputQuantite.setAttribute("name", "itemQuantity");
    inputQuantite.setAttribute("min", "1");
    inputQuantite.setAttribute("max", "100");
    inputQuantite.setAttribute("value", produitsDansLePanier[cart].quantity);
    creationDeDiv4.appendChild(creationDeDiv6);
    creationDeDiv6.setAttribute("class", "cart__item__content__settings__delete");
    creationDeDiv6.appendChild(paraSUp);
    paraSUp.setAttribute("class", "deleteItem");
    paraSUp.innerText = "Supprimer";
  }
}

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
