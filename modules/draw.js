import { createElement } from './createElement.js';

export const draw = () => {
  const $drawTitle = createElement('div', 'drawTitle');
  $drawTitle.innerText = 'Draw!';

  return $drawTitle;
};
