import sandwich from '../../assets/sandwich.png';

export default function home() {
  let home = document.createElement('section');
  home.innerHTML = '';
  home.classList = 'center';

  let title = document.createElement('h1');
  title.textContent = 'Welcome to Genshin Cafe';

  let p = document.createElement('p');
  p.textContent = 'This is a cafe shop for selling food.'

  const img = new Image();
  img.src = sandwich;

  home.append(title);
  home.append(p);
  home.append(img);

  return home;
}