const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
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
    const turn = new Turn('object', 1);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.evaluateGuess(card)).to.equal(true);
  });

  it('should evaluate incorrect guess', function() {
    const turn = new Turn('pumpkin', 1);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.evaluateGuess(card)).to.equal(false);
  });

  it('should give correct Feedback', function() {
    const turn1 = new Turn('object', 1);
    const turn2 = new Turn('pupkin', 1);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn1.evaluateGuess(card);
    turn2.evaluateGuess(card);
    expect(turn1.giveFeedback(card)).to.equal('Correct!')
    expect(turn2.giveFeedback(card)).to.equal('Incorrect')
  })
});
