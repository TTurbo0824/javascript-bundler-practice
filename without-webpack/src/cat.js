import {createElementWithClass as create} from './utilities.js';

export const createCuteCat = () => {
  const root = document.querySelector('#root');
  const catImage = create('img', 'cat-image');
  catImage.src = 'https://media.cdnandroid.com/item_images/1021700/imagen-cute-cat-hd-wallpapers-0big.jpg';
  root.appendChild(catImage);
  return root;
};
