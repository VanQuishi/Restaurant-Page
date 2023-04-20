const menu = document.createElement('div');
menu.classList.add('moduleWrapper');

const createMenuItem = (imgSrc, itemTitle, itemPrice) => {
  let menuItemWrapper = document.createElement('div');

  let imgWrapper = document.createElement('div');
  imgWrapper.classList.add('imgWrapper');
  let img = document.createElement('img');
  img.src = imgSrc;
  imgWrapper.appendChild(img);

  let menuItemTitle = document.createElement('h4');
  menuItemTitle.textContent = itemTitle;

  let menuItemPrice = document.createElement('p');
  menuItemPrice.textContent = '$' + itemPrice;

  menuItemWrapper.appendChild(imgWrapper);
  menuItemWrapper.appendChild(menuItemTitle);
  menuItemWrapper.appendChild(menuItemPrice);

  return menuItemWrapper;
}

const titleWrapper = document.createElement('div');
titleWrapper.classList.add('moduleChild');
let h1Title = document.createElement('h1');
h1Title.textContent = "Menu";
titleWrapper.appendChild(h1Title);

const tacoWrapper = document.createElement('div');
tacoWrapper.classList.add('moduleChild');
let h2TacoTitle = document.createElement('h2');
h2TacoTitle.textContent = "Tacos";
tacoWrapper.appendChild(h2TacoTitle);

let tacoGridWrapper = document.createElement('div');
tacoGridWrapper.classList.add('menuGridWrapper');
let taco1 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let taco2 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let taco3 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let taco4 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let taco5 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let taco6 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
tacoGridWrapper.appendChild(taco1);
tacoGridWrapper.appendChild(taco2);
tacoGridWrapper.appendChild(taco3);
tacoGridWrapper.appendChild(taco4);
tacoGridWrapper.appendChild(taco5);
tacoGridWrapper.appendChild(taco6);

tacoWrapper.appendChild(tacoGridWrapper);

const drinkWrapper = document.createElement('div');
drinkWrapper.classList.add('moduleChild');
let h2Title = document.createElement('h2');
h2Title.textContent = "Drinks";
drinkWrapper.appendChild(h2Title);

let drinkGridWrapper = document.createElement('div');
drinkGridWrapper.classList.add('menuGridWrapper'); 
let drink1 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let drink2 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let drink3 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
drinkGridWrapper.appendChild(drink1);
drinkGridWrapper.appendChild(drink2);
drinkGridWrapper.appendChild(drink3);

drinkWrapper.appendChild(drinkGridWrapper);

const sideWrapper = document.createElement('div');
sideWrapper.classList.add('moduleChild');
let sideTitle = document.createElement('h2');
sideTitle.textContent = "Sides";
sideWrapper.appendChild(sideTitle);

let sideGridWrapper = document.createElement('div');
sideGridWrapper.classList.add('menuGridWrapper'); 
let side1 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let side2 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
let side3 = createMenuItem("../src/taco-icon.svg", "Taco 1", "5.00");
sideGridWrapper.appendChild(side1);
sideGridWrapper.appendChild(side2);
sideGridWrapper.appendChild(side3);

sideWrapper.appendChild(sideGridWrapper);

menu.appendChild(titleWrapper);
menu.appendChild(tacoWrapper);
menu.appendChild(drinkWrapper);
menu.appendChild(sideWrapper);

export default menu;