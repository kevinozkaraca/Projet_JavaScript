// Script de l'affichage des produits en console

function afficheDetailsProduits(Prix1, Prix2) {
    this.firstName = Prix1;
    this.lastName = Prix2;
  }
  
let affichageEnConsole = new afficheDetailsProduits("Canapé1", "Canapé2");
  
console.table(affichageEnConsole);