var expect = require('chai').expect;
var bmi = require('../lib/bmi');

// Chai Documentation
// http://chaijs.com/api/bdd/

// Formula
// http://www.whathealth.com/bmi/formula.html

describe('bmi(weight, height)', function(){
  it('should compute bmi', function(){
    expect(bmi(150, 65)).to.be.within(24, 25);
  });
});
