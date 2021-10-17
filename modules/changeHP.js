import { playerWin } from './playerWin.js';
import { draw } from './draw.js';
import { $arenas, $randomButton } from './variables.js';

export const changeHP = (player1, player2) => {
  const $playerLife1 = document.querySelector(
    '.player' + player1.player + ' .life'
  );
  const $playerLife2 = document.querySelector(
    '.player' + player2.player + ' .life'
  );

  player1.hp -= Math.ceil(Math.random() * 20);
  $playerLife1.style.width = player1.hp + '%';
  player2.hp -= Math.ceil(Math.random() * 20);
  $playerLife2.style.width = player2.hp + '%';

  if ((player1.hp <= 0) & (player2.hp > 0)) {
    $playerLife1.style.width = 0;
    $randomButton.disabled = true;
    $arenas.appendChild(playerWin(player2.name));
  } else if ((player2.hp <= 0) & (player1.hp > 0)) {
    $playerLife2.style.width = 0;
    $randomButton.disabled = true;
    $arenas.appendChild(playerWin(player1.name));
  } else if ((player1.hp <= 0) & (player2.hp <= 0)) {
    $playerLife1.style.width = 0;
    $playerLife2.style.width = 0;
    $randomButton.disabled = true;
    $arenas.appendChild(draw());
  }
};
