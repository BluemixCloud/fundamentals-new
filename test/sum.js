var expect = require('chai').expect;
var sum = require('../lib/sum');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('sum(numbers)', function(){
  it('should sum up a set of numbers', function(){
    expect(sum([2, 9, 1, 3, 4])).to.equal(19);
  });
});
