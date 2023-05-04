const menu = document.createElement('div');
menu.classList.add('moduleWrapper');

const createMenuItem = (imgSrc, itemTitle, itemPrice, color) => {
  let menuItemWrapper = document.createElement('div');

  let imgWrapper = document.createElement('div');
  imgWrapper.classList.add('imgWrapper');
  let img = document.createElement('img');
  img.src = imgSrc;

  if (color != 'none') {
    switch (color) {
      case 'red':
        console.log("red")
        img.style.filter = 'invert(10%) sepia(78%) saturate(6572%) hue-rotate(360deg) brightness(95%) contrast(113%)';
        break;
      case 'orange':
        img.style.filter = 'invert(85%) sepia(49%) saturate(5697%) hue-rotate(348deg) brightness(91%) contrast(112%)';
        break;
      case 'yellow':
        img.style.filter = 'invert(72%) sepia(60%) saturate(1411%) hue-rotate(1deg) brightness(111%) contrast(106%)';
        break;
      case 'green':
        img.style.filter = 'invert(51%) sepia(78%) saturate(411%) hue-rotate(57deg) brightness(93%) contrast(89%)';
        break;
      case 'blue':
        img.style.filter = 'invert(42%) sepia(71%) saturate(970%) hue-rotate(189deg) brightness(110%) contrast(87%)';
        break;
      case 'violet':
        img.style.filter = 'invert(17%) sepia(76%) saturate(4491%) hue-rotate(273deg) brightness(73%) contrast(114%)';
        break;
      case 'black':
        img.style.filter = 'invert(15%) sepia(10%) saturate(2107%) hue-rotate(179deg) brightness(91%) contrast(84%)';
        break;
      case 'invisible':
        img.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(19deg) brightness(98%) contrast(108%)';
        break;
      case 'indigo':
        img.style.filter = 'invert(12%) sepia(33%) saturate(7400%) hue-rotate(271deg) brightness(101%) contrast(141%)';
        break;
    }
  }
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
titleWrapper.classList.add('moduleChild', 'title');
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
let taco1 = createMenuItem("../src/taco-icon.svg", "Indigo Taco", "5.00", "indigo");
let taco2 = createMenuItem("../src/taco-icon.svg", "Red Taco", "5.00", "red");
let taco3 = createMenuItem("../src/taco-icon.svg", "Orange Taco", "5.00", "orange");
let taco4 = createMenuItem("../src/taco-icon.svg", "Yellow Taco", "5.00", "yellow");
let taco5 = createMenuItem("../src/taco-icon.svg", "Green Taco", "5.00", "green");
let taco6 = createMenuItem("../src/taco-icon.svg", "Blue Taco", "5.00", "blue");
let taco7 = createMenuItem("../src/taco-icon.svg", "Violet Taco", "5.00", "violet"); 
let taco8 = createMenuItem("../src/taco-icon.svg", "Black Taco", "5.00", "black");
let taco9 = createMenuItem("../src/taco-icon.svg", "Invisible Taco", "5.00", "invisible");

tacoGridWrapper.appendChild(taco2);
tacoGridWrapper.appendChild(taco3);
tacoGridWrapper.appendChild(taco4);
tacoGridWrapper.appendChild(taco5);
tacoGridWrapper.appendChild(taco6);
tacoGridWrapper.appendChild(taco1);
tacoGridWrapper.appendChild(taco7);
tacoGridWrapper.appendChild(taco8);
tacoGridWrapper.appendChild(taco9);

tacoWrapper.appendChild(tacoGridWrapper);

const drinkWrapper = document.createElement('div');
drinkWrapper.classList.add('moduleChild');
let h2Title = document.createElement('h2');
h2Title.textContent = "Drinks";
drinkWrapper.appendChild(h2Title);

let drinkGridWrapper = document.createElement('div');
drinkGridWrapper.classList.add('menuGridWrapper'); 
let drink1 = createMenuItem("../src/beer.svg", "Beer", "5.00");
let drink2 = createMenuItem("../src/smoothie.svg", "Avocado Smoothie", "5.00");
let drink3 = createMenuItem("../src/margarita.svg", "Margarita", "5.00");
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
let side1 = createMenuItem("../src/fries.svg", "Fries", "5.00");
let side2 = createMenuItem("../src/nachos.svg", "Nachos", "5.00");
let side3 = createMenuItem("../src/soup.svg", "Gumbo Soup", "5.00");
sideGridWrapper.appendChild(side1);
sideGridWrapper.appendChild(side2);
sideGridWrapper.appendChild(side3);

sideWrapper.appendChild(sideGridWrapper);

menu.appendChild(titleWrapper);
menu.appendChild(tacoWrapper);
menu.appendChild(drinkWrapper);
menu.appendChild(sideWrapper);

export default menu;