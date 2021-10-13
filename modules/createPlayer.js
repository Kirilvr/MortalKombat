const $arenas = document.querySelector('.arenas');

export function createPlayer(player, obj) {
  const $player = document.createElement('div');
  $player.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $img = document.createElement('img');
  $img.src = obj.img;

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = `${obj.hp + '%'}`;

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = obj.name;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $arenas.appendChild($player);
}
