/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var praise = {
  1: 'Mighty',
  2: 'Wonderful',
  3: 'Magical',
  4: 'Ancient',
  5: 'Godly',
  6: 'Beautiful',
  7: 'Illustrious',
  8: 'Incredible',
  9: 'Magnificent',
  10: 'Hilarious'
};

let randomPraise = function() {
  //   return praise[Math.floor(Math.random() * 10) + 1];
  return praise[dice(1, 10)];
};

console.log(randomPraise());

const err = 'Improper INPUT!';

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const knight = {
  grit: 20,
  strength: 10,
  attack: 'The knight charges ahead and swings his mighty sword',
  defend: 'The knight takes up a defensive position brings up his shield',
  action(input) {
    if (input.toLowerCase() === 'attack') {
      return console.log(
        `${this.attack} and deals ${dice(0, knight.strength)} damage!`
      );
    } else if (input.toLowerCase() === 'defend') {
      return console.log(
        `${this.defend} and stops ${dice(0, knight.grit)} incoming damage!`
      );
    } else {
      return console.log(err);
    }
  }
};

knight.action('attack');
knight.action('defend');
knight.action('aTtAcK');
knight.action('defen d');

// Principle 3

// code example for New Binding
function Player(name, character, weapon) {
  this.name = name;
  this.character = character;
  this.weapon = weapon;
  this.speak = function() {
    console.log(`Welcome ${this.name} the ${randomPraise()} ${this.character}`);
    console.log(
      `I see you've come equipped with a ${randomPraise()} ${this.weapon}`
    );
    console.log(this);
  };
}

const jerry = new Player('Jerry', 'Shaman', 'Mace');
jerry.speak();

// Principle 4

// code example for Explicit Binding
