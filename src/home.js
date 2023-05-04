const home = document.createElement('div');
home.classList.add('moduleWrapper');

const titleWrapper = document.createElement('div');
titleWrapper.classList.add('moduleChild', 'title');
titleWrapper.id = "titleWrapper";
let h1Title = document.createElement('h1');
h1Title.textContent = "Unicorn's Taco Bar";
let logo = document.createElement('img');
logo.src = "../src/unicorn.svg";
titleWrapper.appendChild(h1Title);
titleWrapper.appendChild(logo);

const descriptionWrapper = document.createElement('div');
descriptionWrapper.classList.add('moduleChild');
descriptionWrapper.id = "descriptionWrapper"
let paraDesc = document.createElement('h3');
paraDesc.textContent = "Unicorn's Taco Bar specializes in Mexican-inspired food"
let paraDesc2 = document.createElement('h3');
paraDesc2.textContent = "Made fresh by hand";
let paraDesc3 = document.createElement('h3');
paraDesc3.textContent = "Unique recipes that you can't find elsewhere!";
descriptionWrapper.appendChild(paraDesc);
descriptionWrapper.appendChild(paraDesc2);
descriptionWrapper.appendChild(paraDesc3);

const hoursWrapper = document.createElement('div');
hoursWrapper.classList.add('moduleChild');
let h2Title = document.createElement('h2');
h2Title.textContent = "Hours";
hoursWrapper.appendChild(h2Title);

let hoursList = document.createElement('ul');
let weekDay = document.createElement('li');
weekDay.textContent = "Mon-Fri: 6am-8pm";
let weekend = document.createElement('li');
weekend.textContent = "Sat-Sun: 8am-10pm";
hoursList.appendChild(weekDay);
hoursList.appendChild(weekend);
hoursWrapper.appendChild(hoursList);

const locationWrapper = document.createElement('div');
locationWrapper.classList.add('moduleChild');
let locationTitle = document.createElement('h2');
locationTitle.textContent = "Location";
let paraLocation = document.createElement('p');
paraLocation.textContent = "888 Jungle Drive, Rift City";
locationWrapper.appendChild(locationTitle);
locationWrapper.appendChild(paraLocation);

home.appendChild(titleWrapper);
home.appendChild(descriptionWrapper);
home.appendChild(hoursWrapper);
home.appendChild(locationWrapper);

export default home;