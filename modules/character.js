export const character1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Spear', 'Kunai'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};

export const character2 = {
  player: 2,
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Bladed Fans', 'Kunai'],
  attack: function () {
    console.log(this.name + ' Fight...');
  },
};
