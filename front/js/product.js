"use strict";

const httpAPI = "http://localhost:3000/api/products/";

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

// If l'URL === Actions diferrentes

//if blble.lenght i++
