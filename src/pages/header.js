const header = document.createElement('div');
header.id = "header";

const homeTabWrapper = document.createElement('div');
homeTabWrapper.classList.add("tabWrapper");
homeTabWrapper.id = "homeTab";
homeTabWrapper.textContent = "Home";

const menuTabWrapper = document.createElement('div');
menuTabWrapper.classList.add("tabWrapper");
menuTabWrapper.id = "menuTab";
menuTabWrapper.textContent = "Menu";

const contactTabWrapper = document.createElement('div');
contactTabWrapper.classList.add("tabWrapper");
contactTabWrapper.id = "contactTab";
contactTabWrapper.textContent = "Contact";

header.appendChild(homeTabWrapper);
header.appendChild(menuTabWrapper);
header.appendChild(contactTabWrapper);

export default header;