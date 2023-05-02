const footer = document.createElement('div');
footer.id = "footer";

const creditWrapper = document.createElement('div');
creditWrapper.classList.add('moduleChild');
let creditLine = document.createElement('p');
creditLine.textContent = "Made by Nin";
creditWrapper.appendChild(creditLine);

footer.appendChild(creditWrapper);

export default footer;