import './index.css';
import home from './home';
import menu from './menu';
import contact from './contact';

const contentDiv = document.createElement('div');
contentDiv.id = "content";

/*Nav Bar*/
const navBarWrapper = document.createElement('div');
navBarWrapper.id = "navBarWrapper";

const homeTabWrapper = document.createElement('div');
homeTabWrapper.classList.add("tabWrapper");
homeTabWrapper.textContent = "Home";

const menuTabWrapper = document.createElement('div');
menuTabWrapper.classList.add("tabWrapper");
menuTabWrapper.textContent = "Menu";

const contactTabWrapper = document.createElement('div');
contactTabWrapper.classList.add("tabWrapper");
contactTabWrapper.textContent = "Contact";

navBarWrapper.appendChild(homeTabWrapper);
navBarWrapper.appendChild(menuTabWrapper);
navBarWrapper.appendChild(contactTabWrapper);

contentDiv.appendChild(navBarWrapper);
contentDiv.appendChild(home);
contentDiv.appendChild(menu);
contentDiv.appendChild(contact);

document.body.appendChild(contentDiv);