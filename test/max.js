var expect = require('chai').expect;
var max = require('../lib/max');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('max(numbers)', function(){
  it('should find the max from a set of numbers', function(){
    expect(max([2, 9, 1, 3, 4])).to.equal(9);
  });
});
