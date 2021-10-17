import { character1, character2 } from './modules/character.js';
import { createPlayer } from './modules/createPlayer.js';
import { changeHP } from './modules/changeHP.js';
import { $arenas, $randomButton } from './modules/variables.js';

$arenas.appendChild(createPlayer(character1));
$arenas.appendChild(createPlayer(character2));

$randomButton.addEventListener('click', function () {
  changeHP(character1, character2);
});
