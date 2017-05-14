var expect = require('chai').expect;
var volume = require('../lib/volume');

// Chai Documentation
// http://chaijs.com/api/bdd/

describe('volume(length, width, height)', function(){
  it('should compute the volume of a cube', function(){
    expect(volume(3, 4, 5)).to.equal(60);
  });
});
