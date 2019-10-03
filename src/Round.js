const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck = deck;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {

    const turn = new Turn(guess, this.deck.cards[this.turns]);

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
    }
    //this could be out of order and cause problems look at later
    this.turns += 1;
    return turn.giveFeedback();

  }

  calculatePercentCorrect() {
    return (((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
  }

  endRound() {
    return `** You answered ${this.calculatePercentCorrect(this.deck)}% of the questions correctly!**`
  }
}

module.exports = Round;
