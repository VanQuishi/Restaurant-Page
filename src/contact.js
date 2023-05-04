const contact = document.createElement('div'); 
contact.classList.add('moduleWrapper');
contact.id = "contactWrapper";

const titleWrapper = document.createElement('div');
titleWrapper.classList.add('moduleChild', 'title');
let h1Title = document.createElement('h1');
h1Title.textContent = "Contact";
titleWrapper.appendChild(h1Title);

let actionCall = document.createElement('h4');
actionCall.id = "actionCall"
actionCall.textContent = "Let's keep the talk on Tacos going!";

let emailForm = document.createElement('form');
emailForm.classList.add('moduleChild');
emailForm.id = "emailForm";

let emailInput = document.createElement('input');
emailInput.type = "email";
emailInput.placeholder = "Your email";

let contentInput = document.createElement('textarea');

const button = document.createElement('button')
button.textContent = "Submit";

emailForm.appendChild(actionCall);
emailForm.appendChild(emailInput);
emailForm.appendChild(contentInput);
emailForm.appendChild(button);

/* const emailWrapper = document.createElement('div');
let emailInput = document.createElement('input');
emailInput.type = "email";
emailInput.placeholder = "Your email";
emailWrapper.appendChild(emailInput);

const contentWrapper = document.createElement('div');
let contentInput = document.createElement('textarea');
contentInput.rows = "10";
contentInput.cols = "100";
contentInput.placeholder = "What are you thinking...";
contentWrapper.appendChild(contentInput);

const button = document.createElement('button')
button.textContent = "Submit";

const formWrapper = document.createElement('div');
formWrapper.classList.add('moduleChild');
let emailForm = document.createElement('form');
emailForm.appendChild(emailWrapper);
emailForm.appendChild(contentWrapper);
formWrapper.appendChild(emailForm);
formWrapper.appendChild(button); */

contact.appendChild(titleWrapper);
/* contact.appendChild(actionCallWrapper); */
/* contact.appendChild(formWrapper); */
contact.appendChild(emailForm);
export default contact;