import riceball from '../../assets/riceball.png';

export default function about() {
  let about = document.createElement('section');
  about.innerHTML = '';
  about.classList = 'center';

  about.innerHTML = `
    <h1>About Genshin Cafe</h1>
    <div>
      <p>Phone number: 123-456-789</p>
      <p>Email: genshin@email.com</p.
    </div>
  `;

  const food1 = new Image();
  food1.src = riceball;
  about.appendChild(food1);

  return about;
}