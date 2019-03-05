const assert = require('assert');
//const should = require('should');      // 别忘记 npm install should
const obj = {
  arr: [1,2,3],
  number: 10
};

describe('should.js和power-assert的区别', () => {
  // it('使用should.js的情况', () => {
  //   should(obj.arr[0]).be.equal(obj.number);      // should api
  // });

  it('使用power-assert的情况', () => {
    assert(obj.arr[0] === obj.number);      // 用assert就可以
  });
});
