"use strict";
// Affichage du numero de commande
function confirm() {
  const lienDeLaFenetre = new URL(document.location).searchParams;
  const orderId = lienDeLaFenetre.get("orderId");
  document.getElementById("orderId").textContent = orderId;
  localStorage.clear();
}
confirm();
