import './index.css';
import header from './pages/header';
import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';
import footer from './pages/footer';

const contentDiv = document.createElement('div');
contentDiv.id = "content";

contentDiv.appendChild(header);
contentDiv.appendChild(home);
contentDiv.appendChild(footer);

document.body.appendChild(contentDiv);

/*switchTab Logic*/
function switchTab(tabId) {
  console.log("switchTab is called");
  contentDiv.removeChild(contentDiv.children[1]); //lastChild is currently the content of each tab
  switch (tabId) {
    case "homeTab":
      contentDiv.insertBefore(home, contentDiv.children[1]);
      break;
    case "menuTab":
      contentDiv.insertBefore(menu, contentDiv.children[1]);
      break;
    case "contactTab":
      contentDiv.insertBefore(contact, contentDiv.children[1]);
      break;
    default:
      contentDiv.insertBefore(home, contentDiv.children[1]);
      break;
  }
}

const tabs = document.getElementsByClassName("tabWrapper");
console.log({tabs});
for (let i = 0; i < tabs.length; i++) {
  console.log(tabs[i]);
  let tabId = tabs[i].getAttribute('id');
  console.log({tabId});
  tabs[i].onclick = () => {switchTab(tabId);};
}
/*End of switchTab Logic*/