var expect = require('chai').expect;
var dice = require('../lib/dice');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('dice()', function(){
  it('should roll a standard 6-sided die', function(){
    expect(dice()).to.be.within(1, 6);
  });
});
