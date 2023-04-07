var elForm = document.querySelector("[data-form]");
var elSelect = document.querySelector("[data-select]");
var elOption = document.querySelector("[data-option]");
var elSelectTou = document.querySelector("[data-select-tou]");
var elImgUrl = document.querySelector("[data-img-url]");
var elTitle = document.querySelector("[data-title]");
var elType = document.querySelector("[data-type]");
var elWeight = document.querySelector("[data-weight]");
var elHeight = document.querySelector("[data-height]");
var elBox = document.querySelector("[data-box]");

renderPokemons();
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var pokemon = {
    img: null,
    type: null,
    name: null,
    height: null,
    weight: null,
  };

  pokemon.img = elImgUrl.value;
  pokemon.type = elType.value;
  pokemon.name = elTitle.value;
  pokemon.height = elHeight.value;
  pokemon.weight = elWeight.value;

  pokemons.unshift(pokemon);
  elBox.prepend(createEl(pokemon));
});

function renderPokemons() {
  elBox.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];
    elBox.appendChild(createEl(pokemon));
  }
}

function createEl(pokemon) {
  var list = document.createElement("li");
  var img = document.createElement("img");
  var title = document.createElement("h4");
  var titleFive = document.createElement("h6");
  var voteHeaght = document.createElement("span");
  var voteWeaght = document.createElement("span");

  list.classList.add("fool_box");
  title.classList.add("jakiro");
  img.classList.add("sniper");
  titleFive.classList.add("title_five");
  voteHeaght.classList.add("height");
  voteWeaght.classList.add("weight");

  img.setAttribute("src", pokemon.img);
  title.textContent = pokemon.name;
  titleFive.textContent = pokemon.type;
  voteHeaght.textContent = pokemon.height;
  voteWeaght.textContent = pokemon.weight;

  list.appendChild(img);
  list.appendChild(title);
  list.appendChild(titleFive);
  list.appendChild(voteHeaght);
  list.appendChild(voteWeaght);

  return list;
}