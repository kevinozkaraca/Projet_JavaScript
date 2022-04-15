"use strict";

//Recuperation du localStorage
let produitsDansLePanier = JSON.parse(localStorage.getItem("cart"));
if (!localStorage.cart || localStorage.cart.length == 0 || localStorage.cart == undefined) {
  const formulaire = document.querySelector("section");
  const textVotrePanier = document.querySelector("H1");
  console.log("Formulaire cache car pas d'article");
  textVotrePanier.innerText = "Votre panier est vide";
  formulaire.style.display = "none";
} else {
  init();
}
function init() {
  displayProduct(produitsDansLePanier);
  refreshPrices();
  modifQuantite();
  validationDuPanier();
}
// Affichage du panier et message au cas ou le panier est vide
function displayProduct(produitsDansLePanier) {
  for (let cart in produitsDansLePanier) {
    //Creation des elements utiles
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
    const ciblageDuContenu = document.querySelector("#cart__items");
    // Ciblage
    ciblageDuContenu.appendChild(baliseArticle);
    baliseArticle.setAttribute("class", "cart__item");
    baliseArticle.setAttribute("data-id", produitsDansLePanier[cart].id);
    baliseArticle.setAttribute("data-color", produitsDansLePanier[cart].color);
    // div 1
    baliseArticle.appendChild(creationDeDiv1);
    creationDeDiv1.setAttribute("class", "cart__item__img");
    creationDeDiv1.appendChild(IMGproduit);
    IMGproduit.setAttribute("src", produitsDansLePanier[cart].image);
    IMGproduit.setAttribute("alt", produitsDansLePanier[cart].textAlt);
    // div 2
    baliseArticle.appendChild(creationDeDiv2);
    creationDeDiv2.setAttribute("class", "cart__item__content");
    // div 3
    creationDeDiv2.appendChild(creationDeDiv3);
    creationDeDiv3.setAttribute("class", "cart__item__content__description");
    creationDeDiv3.appendChild(nomDuProduit);
    nomDuProduit.innerText = produitsDansLePanier[cart].nomProd;
    creationDeDiv3.appendChild(paraCouleur);
    paraCouleur.innerText = produitsDansLePanier[cart].color;
    creationDeDiv3.appendChild(paraPrix);
    paraPrix.innerText = `${produitsDansLePanier[cart].prix} €`;
    // div 4
    creationDeDiv2.appendChild(creationDeDiv4);
    creationDeDiv4.setAttribute("class", "cart__item__content__settings");
    // div 5
    creationDeDiv4.appendChild(creationDeDiv5);
    creationDeDiv5.setAttribute("class", "cart__item__content__settings__quantity");
    creationDeDiv5.appendChild(paraQuantite);
    paraQuantite.innerText = "Quantité : ";
    creationDeDiv5.appendChild(inputQuantite);
    inputQuantite.setAttribute("type", "number");
    inputQuantite.setAttribute("class", "itemQuantity");
    inputQuantite.setAttribute("name", "itemQuantity");
    inputQuantite.setAttribute("min", "1");
    inputQuantite.setAttribute("max", "100");
    inputQuantite.setAttribute("value", produitsDansLePanier[cart].quantity);
    // div 6
    creationDeDiv4.appendChild(creationDeDiv6);
    creationDeDiv6.setAttribute("class", "cart__item__content__settings__delete");
    creationDeDiv6.appendChild(paraSUp);
    paraSUp.setAttribute("class", "deleteItem");
    paraSUp.innerText = "Supprimer";
  }
}
const boutonSupp = document.querySelectorAll(".deleteItem");
boutonSupp.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    let articleTarget = element.closest("article");
    const produitSelectionne = {
      id: articleTarget.getAttribute("data-id"),
      color: articleTarget.getAttribute("data-color"),
    };
    console.log(produitSelectionne);
    supprimerProduit(produitSelectionne);
    refreshPrices();
    location.reload();
  });
});

// Mise a jour des prix
function refreshPrices() {
  let panierLocal = [];
  if (localStorage.cart) {
    panierLocal = JSON.parse(localStorage.cart);
  }
  let qte = 0;
  let total = 0;
  panierLocal.forEach((element) => {
    qte += element.quantity;
    total += qte * element.prix;
  });
  document.getElementById("totalQuantity").innerHTML = qte;
  document.getElementById("totalPrice").innerHTML = total;
}

// Suppression du produit
function supprimerProduit(produitSelectionne) {
  let panierLocal = [];
  if (localStorage.cart) {
    panierLocal = JSON.parse(localStorage.cart);
  }
  panierLocal.forEach((element, index) => {
    if (element.id == produitSelectionne.id && element.color == produitSelectionne.color) {
      panierLocal.splice(index, 1);
    }
  });
  if (panierLocal.length) {
    localStorage.setItem("cart", JSON.stringify(panierLocal));
  } else {
    localStorage.removeItem("cart");
  }
}

// Modification d un produit Mettre le refreshprice() dedans

function modifQuantite() {
  let panierLocal = JSON.parse(localStorage.cart);
  let inputQuantite = document.querySelectorAll(".itemQuantity");
  inputQuantite.forEach((element) => {
    element.addEventListener("change", (e) => {
      //e.preventDefault();
      let changeQte = parseInt(e.path[0].value);
      console.log(parseInt(e.path[0].value));
      /*for (let i; i < panierLocal.length; i++) {
        element.quantity = changeQte;
        localStorage.setItem("cart", JSON.stringify(panierLocal));
        refreshPrices();
      }*/

      panierLocal.forEach((element) => {
        element.quantity = changeQte;
        localStorage.setItem("cart", JSON.stringify(panierLocal));
        refreshPrices();
      });
    });
  });

  //document.getElementById("totalPrice").innerHTML = element.quantity;
}

// Variables pour les saisies et les messages d'erreur pour le formulaire
function validationDuPanier() {
  let validPanier = false;
  let order = document.getElementById("order");

  let firstName = document.getElementById("firstName");
  let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
  let regexFirstName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  let lastName = document.getElementById("lastName");
  let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
  let regexLastName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  let address = document.getElementById("address");
  let addressErrorMsg = document.getElementById("addressErrorMsg");
  let regexAddress =
    /(\d+)?\,?\s?(bis|ter|quater)?\,?\s?(rue|avenue|boulevard|r|av|ave|bd|bvd|square|sente|impasse|cours|esplanade|allée|résidence|parc|rond-point|chemin|côte|place|cité|quai|passage|lôtissement|hameau)?\s([a-zA-Zà-ÿ0-9\s]{2,})+$/gi;

  let city = document.getElementById("city");
  let cityErrorMsg = document.getElementById("cityErrorMsg");
  let regexCity = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;

  let email = document.getElementById("email");
  let emailErrorMsg = document.getElementById("emailErrorMsg");
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  firstName.addEventListener("change", function () {
    if (regexFirstName.test(firstName.value)) {
      firstNameErrorMsg.innerText = "";
      return true;
    } else {
      firstNameErrorMsg.innerText = "Veuillez saisir un prénom correct";
      return false;
    }
  });
  lastName.addEventListener("change", function () {
    if (regexLastName.test(lastName.value)) {
      lastNameErrorMsg.innerText = "";
      return true;
    } else {
      lastNameErrorMsg.innerText = "Veuillez saisir un nom correct";
      return false;
    }
  });
  address.addEventListener("change", function () {
    if (regexAddress.test(address.value)) {
      addressErrorMsg.innerText = "";
      return true;
    } else {
      addressErrorMsg.innerText = "Veuillez saisir une adresse correcte";
      return false;
    }
  });
  city.addEventListener("change", function () {
    if (regexCity.test(city.value)) {
      cityErrorMsg.innerText = "";
      return true;
    } else {
      cityErrorMsg.innerText = "Veuillez saisir un nom de ville correct";
      return false;
    }
  });
  email.addEventListener("change", function () {
    if (regexEmail.test(email.value)) {
      emailErrorMsg.innerText = "";
      return true;
    } else {
      emailErrorMsg.innerText = "Veuillez saisir une adresse mail valide";
      return false;
    }
  });
}
