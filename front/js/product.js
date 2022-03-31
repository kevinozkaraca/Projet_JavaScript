"use strict";

// Eléments du DOM
const httpAPI = "http://localhost:3000/api/products/";
const IMGproduit = document.getElementsByClassName("item__img");
const nomProduit = document.getElementById("title");
const prixProduit = document.getElementById("price");
const descriptionProduit = document.getElementById("description");
const couleurProduit = document.getElementById("colors");
const quantiteProduit = document.getElementById("quantity");
let boutonPanier = document.getElementById("addToCart");

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

// Récupération des produits a afficher / Affichage sans produit
if (afficheURL == "http://localhost:3000/api/products/null") {
  console.log("Aucun article à afficher");
  descriptionProduit.innerText = "Aucun produit à Afficher";
  quantiteProduit.setAttribute("min", 0);
  quantiteProduit.setAttribute("max", 0);
  boutonPanier.disabled = true;
  //alert("Aucun produit selectionne");
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
        // iod
        boutonPanier.setAttribute("data-id", `${product._id}`);
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

// Fonction du  bouton 'Ajouter au panier'
boutonPanier.addEventListener("click", function () {
  let couleurChoisi = document.getElementById("colors").value;
  let quantiteSelectionnee = parseInt(
    document.getElementById("quantity").value
  );
  // Conditions de fonctionnalite du bouton
  if (couleurChoisi == "") {
    console.log("pas de couleur selectionnee");
    alert("Vous n'avez pas selectionnez de couleur");
  } else if (quantiteSelectionnee == 0) {
    console.log("0 en quantite");
    alert("Vous n'avez pas selectionnez de quantite");
  } else if (quantiteSelectionnee > 100) {
    console.log("Au dessus de la quantite possible");
    alert("La quantite est superieur a 100");
  } else if (descriptionProduit.innerText == "Aucun produit à Afficher") {
    console.log("Aucun article affiche");
  } else {
    let produitSelectionne = {
      id: boutonPanier.getAttribute("data-id"),
      color: couleurChoisi,
      quantity: quantiteSelectionnee,
    };
    ajoutAuPanier(produitSelectionne);
  }
});

function ajoutAuPanier(produitSelectionne) {
  let panierLocal = [];
  let cart = JSON.parse(localStorage.getItem("panier"));
  // De base le localStorage.XXX fourni le getItem XXX
  // let cart = JSON.parse(localStorage.panier);
  if (cart.length) {
    console.log("Le panier a recu --->");
    console.log(produitSelectionne);
    panierLocal.push(produitSelectionne);
    localStorage.setItem("panier", JSON.stringify(panierLocal));
  } else {
    array.forEach((element) => {
      console.log("une erreur s'est produite");
      console.log(element);
    });
  }
  const lienDeLaFenetre = window.location;
  const recupURL = new URL(lienDeLaFenetre);
  let productId = recupURL.searchParams.get("id");

  // LocalStorage
}
