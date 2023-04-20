const home = document.createElement('div');
home.classList.add('moduleWrapper');

const titleWrapper = document.createElement('div');
titleWrapper.classList.add('moduleChild');
let h1Title = document.createElement('h1');
h1Title.textContent = "Nin's Taco Bar";
titleWrapper.appendChild(h1Title);

const descriptionWrapper = document.createElement('div');
descriptionWrapper.classList.add('moduleChild');
let paraDesc = document.createElement('p');
paraDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat. Donec massa sapien faucibus et molestie ac."
descriptionWrapper.appendChild(paraDesc);

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