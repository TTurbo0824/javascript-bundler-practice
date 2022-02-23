import {createElementWithClass as create} from './utilities.js';
import dog from '../images/cute_dog.jpeg';
import './style.css';

const createCutedog = () => {
  const root = document.querySelector('#root');
  const dogImage = create('img', 'pet-image');
  dogImage.src = dog;
  root.appendChild(dogImage);

  const link = create('a', 'statement');
  link.href = './index.html';
  link.innerHTML = 'you don\'t agree with that?';
  root.appendChild(link);
  return root;
};

createCutedog();