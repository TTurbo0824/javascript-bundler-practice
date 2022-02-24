import {createElementWithClass as create} from './utilities.js';
import dog from '../images/cute_dog.jpeg';

const createCutedog = () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = 'turquoise';

  const root = document.querySelector('#root');
  const dogImage = create('img', 'pet-image');
  dogImage.src = dog;
  root.appendChild(dogImage);

  const div = create('div', 'link-container');
  const link = create('a', 'statement');
  link.href = './index.html';
  link.innerHTML = 'you don\'t agree with that?';
  div.appendChild(link);
  root.appendChild(div);
  return root;
};

createCutedog();
