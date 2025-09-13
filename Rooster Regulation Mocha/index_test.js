const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', ()=>{
  describe('.announceDawn', ()=>{
    it('returns a rooster call', ()=>{
      const expected = 'moo!';
      const actual = Rooster.announceDawn();

      assert.strictEqual(actual, expected);
    });
  });
  describe('.timeAtDawn', ()=>{
    it('returns its argument as a string', ()=>{
      const expected = '15';
      const actual = Rooster.timeAtDawn(15);
      assert.strictEqual(actual, expected);
    }),
    it('throws an error if passed a number less than 0', ()=>{
      assert.throws(
        () => {
          Rooster.timeAtDawn(-1);
        },
        RangeError
      );
    }),
    it('throws an error if passed a number less than 23', ()=>{
      assert.throws(
        () => {
          Rooster.timeAtDawn(24);
        },
        RangeError
      );
    })
  })
});