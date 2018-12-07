// Get language from dropdown

const lng = document.querySelector("#language > div > button > img");
// console.log(lng.title);

// Modify price field in search results

const searchProductPrices = document.querySelectorAll(".price");

const searchModels = document.querySelectorAll(".product-model");

searchModels.forEach(function(model,i){
  if (model.innerText.slice(-1) === "*") {
    if (lng.title === "English") {
      searchProductPrices[i].innerText = "Price by size" ;
    } else {
      searchProductPrices[i].innerText = "Prix selon le format" ;
    }
  }
});

// Modify price field in general

const model = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(6) > li:nth-child(1)");  

const price = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(7) > li > h2");

const replace = (function() {
  if (model !== null && model.innerText.slice(-1) === "*") {
    if (lng.title === "English") {
      price.innerText = "Select a size"; 
    } else {
      price.innerText = "Sélectionnez un format";
    }
  }
});
replace()
