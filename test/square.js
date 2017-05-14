var expect = require('chai').expect;
var square = require('../lib/square');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('square(x)', function(){
  it('should square various numbers', function(){
    expect(square(3)).to.equal(9);
  });
});
