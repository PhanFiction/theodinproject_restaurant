import './style.css';
import homePage from './pages/home';
import aboutPage from './pages/about';
import menuPage from './pages/menu';

document.addEventListener("DOMContentLoaded", (e) => {
  const content = document.getElementById('content');
  content.appendChild(homePage());

  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const about = document.getElementById('about');

  home.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(homePage());
  })

  menu.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(menuPage());
  })

  about.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(aboutPage());
  })
  
});