var expect = require('chai').expect;
var cube = require('../lib/cube');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('cube(x)', function(){
  it('should cube various numbers', function(){
    expect(cube(3)).to.equal(27);
  });
});
