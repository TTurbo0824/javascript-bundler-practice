import './style.css';
import {createElementWithClass as create} from './utilities.js';

const apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

async function getDrinks() {
  const response = await fetch(`${apiURL}martini`);
  const data = await response.json();

  return data;
}

getDrinks().then((drink) => {
  drink.drinks.forEach((el) => {
    const root = document.querySelector('#root');
    const post = create('div', 'post');
    const drinkImg = create('img', 'cocktail-image');
    drinkImg.src = el.strDrinkThumb;
    post.appendChild(drinkImg);

    let overlay = create('div', 'overlay');
    const title = create('div', 'title');
    title.innerHTML = el.strDrink;
    overlay.appendChild(title);
    overlay.addEventListener('click', () =>
      newPage(el.strDrink, el.strDrinkThumb, el.strInstructions)
    );

    post.append(overlay);
    root.appendChild(post);

    return root;
  });
});

function newPage(name, img, instruction) {
  const root = document.querySelector('#root');
  root.innerHTML = '';
  // console.log(name, img, instruction);

  const drinkName = create('div', 'title');
  drinkName.innerHTML = name;
  const drinkImg = create('img', 'cocktail-image');
  drinkImg.src = img;

  const drinkIns = create('div', 'instruction');
  drinkIns.innerHTML = instruction;

  root.append(drinkName, drinkImg, drinkIns);
}
