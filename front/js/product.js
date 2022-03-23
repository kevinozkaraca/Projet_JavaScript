"use strict";

// Eléments du DOM
const httpAPI = "http://localhost:3000/api/products/";
const IMGproduit = document.getElementsByClassName("item__img");
const nomProduit = document.getElementById("title");
const prixProduit = document.getElementById("price");
const descriptionProduit = document.getElementById("description");
const couleurProduit = document.getElementById("colors");
const quantiteProduit = document.getElementById("quantity");

// Recuperation des informations du lien
function recuperationURL() {
  const lienDeLaFenetre = window.location;
  const recupURL = new URL(lienDeLaFenetre);
  let productId = recupURL.searchParams.get("id");
  let URLfinal = httpAPI + productId;
  return URLfinal;
}

// Affichage de l'URL final (URL +ID)
let afficheURL = recuperationURL();
console.log("Affichage  d'ID du produit --->");
console.log(afficheURL);

// Récupération des produits / Affichage sans produit
if (afficheURL == "http://localhost:3000/api/products/null") {
  console.log("Aucun article à afficher");
  descriptionProduit.innerText = "Aucun produit à Afficher";
  quantiteProduit.setAttribute("min", 0);
  quantiteProduit.setAttribute("max", 0);
} else {
  async function recuperationArticles() {
    recuperationURL();
    return await fetch(afficheURL)
      .then(function (reponse) {
        console.log("l'API a bien repondu");
        return reponse.json();
      })
      .then(function (value) {
        return value;
      })
      // Affichage des elements en fonction des produits
      .then(function (getProduct) {
        console.log("Ajout des produits au DOM");
        const product = getProduct;
        // Image
        let IMGcreation = document.createElement("img");
        IMGcreation.setAttribute("src", `${product.imageUrl}`);
        IMGcreation.setAttribute("alt", `${product.altTxt}`);
        document.querySelector(".item__img").appendChild(IMGcreation);
        // Nom
        nomProduit.textContent = `${product.name}`;
        // Prix
        prixProduit.textContent = `${product.price}`;
        // Description
        descriptionProduit.textContent = `${product.description}`;
        // Couleur
        couleurProduit.insertAdjacentHTML(
          "beforeend",
          product.colors
            .map((color) => `<option value="${color}">${color}</option>`)
            .join()
        );
        return getProduct;
      });
  }
  recuperationArticles();
}
