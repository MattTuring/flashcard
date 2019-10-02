class Turn {
  constructor(guess, cardObject) {
    this.guess = guess;
    this.card = cardObject;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess(card, round) {
    if (this.guess === card.correctAnswer) {
      return true;
    } else {
      round.incorrectGuesses.push(card.id)
      return false;
    }
  }

  giveFeedback(card) {
    if (this.evaluateGuess(card)) {
      return `Correct!`
    } else {
      return `Incorrect`
    }
  }

}
module.exports = Turn;
