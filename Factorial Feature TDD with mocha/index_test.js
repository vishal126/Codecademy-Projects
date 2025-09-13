var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    // first test to check for input 5
    it('calculating factorial for 5', ()=>{
      // setup
      const inputNumber = 5;
      const expectedResult = 120;

      // exercise
      const actualResult = Calculate.factorial(inputNumber);

      // verify
      assert.equal(actualResult, expectedResult);
    });

    //second test to check for different input
    it('calculate factorial of different input', ()=>{
      // setup
      const inputNumber = 4;
      const expectedResult = 24;

      // exercise
      const actualResult = Calculate.factorial(inputNumber);

      // verify
      assert.equal(actualResult, expectedResult);
    });

    // checking for edge cases
    //second test to check for different input
    it('calculate factorial of different input', ()=>{
      // setup
      const inputNumber = 0;
      const expectedResult = 1;

      // exercise
      const actualResult = Calculate.factorial(inputNumber);

      // verify
      assert.equal(actualResult, expectedResult);
    });
  });
});