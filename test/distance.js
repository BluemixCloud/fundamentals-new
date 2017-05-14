var expect = require('chai').expect;
var distance = require('../lib/distance');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('distance(p1, p2)', function(){
  it('should compute the distance between two points', function(){
    var p1 = {x: 3, y: 5};
    var p2 = {x: 4, y: 7};
    expect(distance(p1, p2)).to.be.within(2, 3);
  });
});
