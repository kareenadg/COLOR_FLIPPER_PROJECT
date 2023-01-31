import './style.css'

const Neutrals_PALETTE = {
  '#EAE0D5': 'Almond',
  '#D69F7E': 'Antique Brass',
  '#A18276': 'Beaver',
  '#AB8476': 'Beaver Two',
  '#BAA898': 'Beige Grey',
  '#F1DABF': 'Bisque',
  '#774936': 'Bole',
  '#B86F52': 'Brown Sugar',
  '#BC8034': 'Bronze',
  '#B57F50': 'Cafe Au Lait',
  '#C59B76': 'Camel',
  '#92817A': 'Cinerous',
  '#886F68': 'Cinerous Two',
  '#796465': 'Deep Taupe',
  '#D7BEA8': 'Desert Sand',
  '#DCAB6B': 'Earth Yellow',
  '#C6AC8F': 'Khaki Web',
  '#BCA371': 'Light French Beige',
  '#735751': 'Liver',
  '#96705B': 'Liver Chesnut',
  '#EDB88B': 'Macaroni And Cheese',
  '#C18C5D': 'Persian Orange',
  '#774E24': 'Sepia',
  '#CCAD8F': 'Tan',
  '#D77A61': 'Terra Cota',
  '#D8B4A0': 'Tumbleweed',
  '#B49286': 'Tuscany',
  '#5E503F': 'Umber',
  '#634133': 'Van Dyke Brown',
  '#C89B7B': 'Unknown',
}

const addOptions = () => {
const mySelect = document.querySelector("#color-picker");

Object.keys(Neutrals_PALETTE).forEach((color) => {
  const myOption = document.createElement("option");
  myOption.value = color;
  myOption.textContent = Neutrals_PALETTE[color];

  mySelect.append(myOption);
})
};

const addEvent = () => {
const mySelect = document.querySelector("#color-picker");
const colorName = document.querySelector("#color-name");
mySelect.addEventListener("change", (ev) => {
const myColor = ev.target.value;
document.body.style.backgroundColor = myColor;
colorName.textContent = `${Neutrals_PALETTE[myColor]} | ${myColor}`;
})
}

addOptions();
addEvent();