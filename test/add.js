var expect = require('chai').expect;
var add = require('../lib/add');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('add(x, y)', function(){
  it('should add two numbers', function(){
    expect(add(3, 4)).to.equal(7);
  });
});
