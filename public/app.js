import {ReverseString} from './reverse-string.js';

window.addEventListener('load', () => {
  const body = window.document.body || document.createElement('body');
  const reverseString = new ReverseString(body);
});