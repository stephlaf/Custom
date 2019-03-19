// Get language from dropdown

const lng = document.querySelector("#language > div > button > img");

// Modify price field in search results

const searchProductPrices = document.querySelectorAll(".price");

const searchModels = document.querySelectorAll(".product-model");

searchModels.forEach(function(model,i){
  if (model.innerText.slice(-1) === "_") {
    if (lng.title === "English") {
      searchProductPrices[i].innerText = "Price by option" ;
    } else {
      searchProductPrices[i].innerText = "Prix selon l'option" ;
    }
  }
});

// Modify price field in general

const model = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(6) > li:nth-child(1)");  

const price = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(7) > li > h2");

const replace = (function() {
  if (model !== null && model.innerText.slice(-1) === "_") {
    if (lng.title === "English") {
      price.innerText = "Select an option"; 
    } else {
      price.innerText = "Sélectionnez une option";
    }
  }
});
replace()

// Make sub-categories text bigger
const h3Text = document.querySelector('h3.vie-editable-section');
const ulSubCat = document.querySelector('#content ul');

const makeTextBigger = (function() {
  if (h3Text && (h3Text.textContent === 'Sous-catégorie(s)' || h3Text.textContent === 'Subcategories')) {
    console.log('from makeBigger');
  }
});
makeTextBigger();
