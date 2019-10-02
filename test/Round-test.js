const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Round', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card', function() {
    expect(round.returnCurrentCard()).to.equal({ id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter' });
  });

  it('should store number of turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should return guess feedback', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should provide feedback correct', function() {
    expect(round.takeTurn('sea otter')).to.equal(`Correct!`);
  });

  it('should provide feedback incorrect', function() {
    expect(round.takeTurn('spleen')).to.equal(`Incorrect`);
  });

  it('should count rounds', function() {
    expect(round.turns).to.equal(2);
  });

  it('should log incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should calculatePercentCorrect', function() {
    expect(round.calculatePercentCorrect()).to.equal(50);
  });


});
