/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Allows you to reuse functions/objects
 * 2. Allows you to pass dynamic variables to those objects
 * 3. Allows for you to use "constructors"
 * 4. Allows you to use .apply & .call
 *
 * write out a code example of each explanation above
 */

// A RPG games bread and butter
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Dictionary of random praises
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

// Returns a random praise using the dice function
let randomPraise = function() {
  //   return praise[Math.floor(Math.random() * 10) + 1];
  return praise[dice(1, 10)];
};

const err = 'Improper INPUT!';

// Principle 1

// code example for Window Binding

console.log('---------- Window Biding ----------');

function whoAmI(name) {
  console.log(this);
  return name;
}

whoAmI('BruhMoment');
// Principle 2

// code example for Implicit Binding

console.log('---------- Implicit Biding ----------');

class Knight {
  constructor(name) {
    this.name = name;
    this.grit = 20;
    this.strength = 13;
    this.attack = `${name} charges ahead and swings his mighty sword`;
    this.defend = `${name} takes up a defensive position brings up his shield`;
    this.action = function(input) {
      if (input.toLowerCase() === 'attack') {
        console.log(
          `${this.attack} and deals ${dice(0, this.strength)} damage!`
        );
        console.log(this);
      } else if (input.toLowerCase() === 'defend') {
        console.log(
          `${this.defend} and stops ${dice(0, this.grit)} incoming damage!`
        );
        console.log(this);
      } else {
        console.log(err);
      }
    };
  }
}

const Tim = new Knight('Tim');
Tim.action('attack');
Tim.action('defend');
Tim.action('aTtAcK');
Tim.action('defen d');

// Principle 3

// code example for New Binding

console.log('---------- New Binding ----------');

class Player {
  constructor(name, character, weapon) {
    this.name = name;
    this.character = character;
    this.weapon = weapon;
    this.intro = function() {
      console.log(
        `Welcome ${this.name} the ${randomPraise()} ${
          this.character
        } I see you've come equipped with a ${randomPraise()} ${this.weapon}`
      );
      console.log(this);
    };
  }
}

const Thomas = new Player('Thomas', 'Shaman', 'Mace');
Thomas.intro();

const Walter = new Player('Walter', 'Warrior', 'Sword');
Walter.intro();

// Principle 4

// code example for Explicit Binding

console.log('---------- Explicit Biding ----------');

Thomas.intro.call(Walter);
Walter.intro.apply(Thomas);

Walter.intro();
Thomas.intro();
