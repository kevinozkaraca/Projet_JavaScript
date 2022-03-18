// ----- API et Affichage sur le site ------
// Lancement de l'API dans le dossier back> npm install
//                                    back> node server
//                                      port 3000
// Adresse de l'API
const httpAPI = "http://localhost:3000/api/products/";

// Requete à l'API pour l'affichage en console et la récupération du JSON
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

// Récupération des données et intégration dans le DOM
async function articlesAPI() {
  // DOMParser analyse le contenu HTML : https://developer.mozilla.org/fr/docs/Web/API/DOMParser
  const analyser = new DOMParser();
  // Products pour le products aui se trouve dans l'API
  let products = await recuperationArticles();
  console.log("articles de l'API --->", products);
  let blocHTMLArticle = document.getElementById("items");

  // Boucle de l'ensemble des produits et affichage dans le DOM
  for (i = 0; i < products.length; i++) {
    let gabaritHTML = `<a href="./product.html?id=${products[i]._id}">
        <article id="element${i}">
          <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
          <h3 class="productName">${products[i].name}</h3>
          <p class="productDescription">${products[i].description}</p>
        </article> 
      </a>`;

    console.log("Le produit a l'index " + i + " est affiché");

    // Analyse une chaîne de caractères et retourne un HTMLDocument.
    const affichageArticles = analyser.parseFromString(
      gabaritHTML,
      "text/html"
    );
    blocHTMLArticle.appendChild(affichageArticles.body.firstChild);
  }
}

// Appel de la fonction
articlesAPI();
