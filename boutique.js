// Modify price field in search results

const searchProductPrices = document.querySelectorAll(".price");

const searchModels = document.querySelectorAll(".product-model");

searchModels.forEach(function(model,i){
  if (model.innerText.slice(-1) === "*") {
  searchProductPrices[i].innerText = "Prix selon le format" ;
  }
});

// Modify price field in general

const model = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(6) > li:nth-child(1)");  

const price = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(7) > li > h2");

const replace = (function() {
  if (model !== null && model.innerText.slice(-1) === "*") {
  price.innerText = "Sélectionnez un format";
  }
}) ;
replace()

//Change text of button when empty category

const bouton = document.querySelector("#content > div.buttons.clearfix > div > a");
bouton.innerText = "Maison";


// const address = (window.location.pathname);
// const fetch = address.split('/');
// category = (fetch[fetch.length-3]);
