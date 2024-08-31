import sandwich from '../../assets/sandwich.png';
import jelly from '../../assets/jelly.png';
import kebab from '../../assets/kebab.png';
import lemonade from '../../assets/lemonade.png';
import pizza from '../../assets/pizza.png';
import riceball from '../../assets/riceball.png';

export default function menu() {
  let menu = document.createElement('section');
  menu.innerHTML = '';
  menu.classList = 'center';

  let title = document.createElement('h1');
  title.textContent = 'Genshin Cafe Menu';
  menu.append(title);

  let container = document.createElement('div');
  container.classList = 'menu';

  const food1 = new Image();
  const food2 = new Image();
  const food3 = new Image();
  const food4 = new Image();
  const food5 = new Image();
  const food6 = new Image();

  food1.src = sandwich;
  food2.src = jelly;
  food3.src = lemonade;
  food4.src = pizza;
  food5.src = riceball;
  food6.src = kebab;

  container.append(food1);
  container.append(food2);
  container.append(food3);
  container.append(food4);
  container.append(food5);
  container.append(food6);

  menu.appendChild(container);

  return menu;
}