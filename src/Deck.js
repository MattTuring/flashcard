class Deck {
  constructor(cards) {
    this.cards = [];
    this.object = {};
    for (let i = 0; i < cards.length; i++) {
      this.object.id = cards[i].id;
      this.object.question = cards[i].question;
      this.object.answers = cards[i].answers;
      this.object.correctAnswer = cards[i].correctAnswer;
      this.cards.push(this.object);
      this.object = {};
    }
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
