var expect = require('chai').expect;
var subtract = require('../lib/subtract');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('subtract(x, y)', function(){
  it('should subtract y from x, i.e., x - y', function(){
    expect(subtract(3, 5)).to.equal(-2);
  });
});
