// Lancement de l'API dans le fichier back>npm install 
//                                    back> node server

httpAPI = 'http://localhost:3000/api/products/'

fetch(httpAPI)
.then((reponseAPI) => {
  console.log(reponseAPI.json());
})
.catch(function(){
  console.log('Erreur dans le fetch')
});


/*
// Script de l'affichage des produits en console

function afficheDetailsProduits(Prix1, Prix2) {
    this.firstName = Prix1;
    this.lastName = Prix2;
  }
  
let affichageEnConsole = new afficheDetailsProduits("Canapé1", "Canapé2");
  
console.table(affichageEnConsole);

*/

