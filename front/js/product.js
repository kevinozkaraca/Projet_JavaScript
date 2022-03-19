"use strict";

// Eléments du DOM
const httpAPI = "http://localhost:3000/api/products/";
const IMGproduit = document.getElementsByClassName("item__img");
const nomProduit = document.getElementById("title");
const prixProduit = document.getElementById("price");
const descriptionProduit = document.getElementById("description");
const couleurProduit = document.getElementById("colors");

// Eléments à ajouter au DOM
let IMGajout = document.createElement("img");

// Recuperation des informations du lien
function recuperationURL() {
  const lienDeLaFenetre = window.location;
  const recupURL = new URL(lienDeLaFenetre);
  let productId = recupURL.searchParams.get("id");
  let URLfinal = httpAPI + productId;
  return URLfinal;
}

// Affichage de l'URL en console
let voirURL = recuperationURL();
console.log("Affichage  d'ID du produit --->");
console.log(voirURL);

// Récupération des produits
if (voirURL == "http://localhost:3000/api/products/null") {
  console.log("Aucun article à afficher");
} else {
  async function recuperationArticles() {
    return await fetch(httpAPI)
      .then(function (reponse) {
        console.log("l'API a bien repondu");
        return reponse.json();
      })
      .then(function (value) {
        return value;
      })
      .catch(function (err) {
        console.log("Erreur dans le fetch");
        console.log(err);
      });
  }
  recuperationArticles();
}
