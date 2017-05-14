var expect = require('chai').expect;
var factorial = require('../lib/factorial');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('factorial(x)', function(){
  it('should compute factorial', function(){
    expect(factorial(5)).to.equal(120);
  });
});
