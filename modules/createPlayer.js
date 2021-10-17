import { createElement } from './createElement.js';

export const createPlayer = (obj) => {
  const $player = createElement('div', 'player' + obj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $img = createElement('img');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');

  $img.src = obj.img;
  $life.style.width = `${obj.hp + '%'}`;
  $name.innerText = obj.name;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  return $player;
};
