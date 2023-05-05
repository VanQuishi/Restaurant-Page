const footer = document.createElement('div');
footer.id = "footer";

const creditWrapper = document.createElement('div');
let creditLine = document.createElement('p');
creditLine.textContent = "Made by Nin";
creditWrapper.appendChild(creditLine);

const sourceCodeWrapper = document.createElement('div');
let link = document.createElement('a');
link.href = "https://github.com/VanQuishi/Restaurant-Page";
link.textContent = "View source code on Github";
link.target = "_blank";
link.style.textDecoration = "none";
sourceCodeWrapper.appendChild(link);

footer.appendChild(creditWrapper);
footer.appendChild(sourceCodeWrapper);

export default footer;