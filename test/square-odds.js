var expect = require('chai').expect;
var squareOdds = require('../lib/square-odds');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('squareOdds(numbers)', function(){
  it('should return a filtered list of the odd values squared', function(){
    expect(squareOdds([2, 9, 1, 3, 4])).to.deep.equal([81, 1, 9]);
  });
});
