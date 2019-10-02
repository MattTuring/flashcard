const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('object', 1);
    expect(turn.guess).to.equal('object');
  });

  it('should evaluate correct guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should evaluate incorrect guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('pumpkin', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give correct Feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('pupkin', card);
    turn1.evaluateGuess(card);
    turn2.evaluateGuess(card);
    expect(turn1.giveFeedback(card)).to.equal('Correct!')
    expect(turn2.giveFeedback(card)).to.equal('Incorrect')
  })
});
