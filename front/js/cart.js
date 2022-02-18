// Variables pour les saisies et les messages d'erreur pour le formulaire
let order = document.getElementById('order');

let firstName = document.getElementById('firstName');
let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');

let lastName = document.getElementById('lastNam');
let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');

let address = document.getElementById('address');
let addressErrorMsg = document.getElementById('addressErrorMsg');

let city = document.getElementById('city');
let cityErrorMsg = document.getElementById('cityErrorMsg');

let email = document.getElementById('email');
let emailErrorMsg = document.getElementById('emailErrorMsg');

// Conditions d'erreur pour le formulaire

order.addEventListener('click', function(){
    console.log('Bouton "Commander !" cliqué')
    
});
