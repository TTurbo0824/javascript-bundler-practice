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
    const drinkImg = create('img', 'cocktail-image');
    drinkImg.src = el.strDrinkThumb;

    const title = create('div');
    title.innerHTML = el.strDrink;
    root.appendChild(title);
    root.appendChild(drinkImg);
    return root;
  });
});
