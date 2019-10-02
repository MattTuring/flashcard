class Round {
  constructor() {
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(deck) {
    return deck.cards[this.turns];
  }

  takeTurn(deck) {
    this.turns += 1;
    turn.evaluateGuess(deck.cards[this.turns]);
  }

  calculatePercentCorrect(deck) {
    return (deck.countCards() - this.incorrectGuesses.length) / deck.countCards()
  }

  endRound(deck) {
    return `** You answered ${calculatePercentCorrect(deck)}% of the questions correctly!**`
  }
}

module.exports = Round;
