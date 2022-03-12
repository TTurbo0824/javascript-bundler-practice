const apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
async function getDrinks() {
  const response = await fetch(`${apiURL}martini`);
  const data = await response.json();

  return data;
}

getDrinks().then((drink) => console.log(drink));
