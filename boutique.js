

const hePrice = document.querySelectorAll(".price");
const heH2 = document.querySelector("#content > h2");
const replace = () => {
  if (heH2.innerHTML === "Huiles essentielles") {
  hePrice.innerText === "Test"
  }
}


const hePrice = ["paul", "john", "ringo", "george"];
hePrice.forEach((price) => {
  console.log(price.innerText());
});


hePrice.forEach(function(price) {
  console.log(price.innerText);
});

const heProductPrice = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(7) > li > h2");
console.log(heProductPrice);

const replace(function(text) {
if (category === "huiles-essentielles") {
  heProductPrice.innerText = "Sélectionnez un format";
  }
});

// Hydrolats

const hyH2 = document.querySelector("#content > h2");

const hyPrice = document.querySelectorAll(".price");

hyPrice.forEach(function(price) {
if (hyH2.innerHTML === "Hydrolats") {
  price.innerText = "Prix selon le format";
  }
});


const heProductPrice = document.querySelector("#content > div > div.col-sm-4 > ul:nth-child(7) > li > h2");

const url = (window.location.pathname);

const fetch = url.split('/');
category = (fetch[fetch.length-3]);

const replace = (function() {
if (category === "huiles-essentielles") {
  heProductPrice.innerText = "Sélectionnez un format";
  }
});
replace()

const categories = ["Argiles", "Beurres végétaux", "Cires et épaississants", "Conservateurs, anti-oxydants et ajusteurs de pH", "Extraits actifs et ingrédients alimentaires", "Huiles végétales", "Huiles essentielles", "Hydrolats", "Macérations de plantes", "Plantes médicinales, extraits de plantes et de fruits", "Soins de base neutres"];
if (categories.includes(h2.innerHTML));

const categoriesUrl = ["argiles", "beurres-vegetaux", "cires-et-epaississants", "conservateurs-anti-oxydants-et-ajusteurs-de-pH", "extraits-actifs-et-ingrédients-alimentaires", "huiles-végétales", "huiles-essentielles", "hydrolats", "macerations-de-plantes", "plantes-médicinales-extraits-de-plantes-et-de-fruits", "soins-de-base-neutres"];
