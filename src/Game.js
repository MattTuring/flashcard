const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    var cards = [];

    for (let i = 0; i < prototypeQuestions.length; i++) {
      let card = new Card(prototypeQuestions[i]);
      console.log(prototypeQuestions[i])
      console.log(card);
      cards.push(card);
    }

    var deck = new Deck(cards);
    this.currentRound += 1;
    var round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }


}

module.exports = Game;

// Should keep track of the currentRound
// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
