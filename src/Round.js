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
      this.incorrectGuesses.push(this.deck.cards[this.turns]);
      this.deck.cards.push(this.deck.cards[this.turns]);
    }
    //this could be out of order and cause problems look at later
    this.turns += 1;
    return turn.giveFeedback();

  }

  calculatePercentCorrect() {
    return (((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
  }

  endRound() {
    if (this.calculatePercentCorrect(this.deck) < 100) {
      console.log(`** You answered ${this.calculatePercentCorrect(this.deck)}% of the questions correctly!** TIME FOR BONUS LEARNING`)
    } else {
      console.log(`YOU ARE PERFECT`)
    }
  }
  endRoundBonus() {
    console.log(`You Completed The BONUS LEARNING!`)
  }
}

module.exports = Round;
