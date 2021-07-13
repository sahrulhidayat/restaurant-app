import '../styles/main.css';
import '../styles/responsive.css';
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  window.scroll(0, 0);
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
