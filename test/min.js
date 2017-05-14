var expect = require('chai').expect;
var min = require('../lib/min');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('min(numbers)', function(){
  it('should find the min from a set of numbers', function(){
    expect(min([2, 9, 1, 3, 4])).to.equal(1);
  });
});
