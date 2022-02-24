import {createElementWithClass as create} from './utilities.js';
import cat from '../images/cute_cat.jpeg';

export const createCuteCat = () => {
  const root = document.querySelector('#root');
  const catImage = create('img', 'pet-image');
  catImage.src = cat;
  root.appendChild(catImage);

  const div = create('div', 'link-container');
  const link = create('a', 'statement');
  link.href = './dog.html';
  link.innerHTML = 'you don\'t agree with that?';
  div.appendChild(link);
  root.appendChild(div);
  return root;
};
