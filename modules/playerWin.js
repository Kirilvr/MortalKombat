import { createElement } from './createElement.js';

export const playerWin = (name) => {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' win!';

  return $winTitle;
};
