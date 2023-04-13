const contentDiv = document.createElement('div');

/* headline */
const headline = document.createElement('h1'); 
headline.textContent = "Taco Bell Menu";
console.log(headline);

const imgDiv = document.createElement('div');
imgDiv.style = "width: 50px;";
const imgTag = document.createElement('img');
imgTag.src = "../src/taco-icon.svg";
imgDiv.appendChild(imgTag);

const descriptionDiv = document.createElement('div');
const h2Tag = document.createElement('h2');
h2Tag.textContent = "Find tacos near you today";
descriptionDiv.appendChild(h2Tag);

contentDiv.appendChild(headline);
contentDiv.appendChild(imgDiv);
contentDiv.appendChild(descriptionDiv);

document.body.appendChild(contentDiv);