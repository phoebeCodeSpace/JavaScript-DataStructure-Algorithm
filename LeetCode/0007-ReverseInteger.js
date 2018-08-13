/**
 * @see {@link https://leetcode.com/problems/two-sum/description/}
 * @description 给一个32位有符号整型[−231, 231− 1]， 翻转数字部分。 范围以外的返回0
 * @param {number} x
 * @return {number}
 */

 var reverse = function(x) {
     var result;
     if (x >= 0) {
         result = +String(x).split('').reverse().join('')
     } else {
         result = -String(Math.abs(x)).split('').reverse().join('')
     }
     if (-Math.pow(2, 31) > result || Math.pow(2, 31) - 1 < result) {
         return 0;
     } else {
         return result;
     }
 };

 // without reverse()
 // 思路： 处理绝对值的翻转数
 var reverse = function(x) {
     var y = Math.abs(x);
     var result = 0;
     while (y !== 0) {
         result = result * 10 + y % 10;
         y = parseInt(y / 10);
     }
     x > 0 ? result = result : result = -result;
     if (result > 2147483648 || result < -2147483649) return 0;
     return result;
 };

 // 通过 y.toString(2).length 来判断是否在范围内
 var reverse = function(x) {
     if (x === 0) return 0;
     var y = Math.abs(x);
     if (y.toString(2).length > 31) return 0;
     y = y.toString().split("").reverse();
     while (y[0] === 0) {
         y.splice(0, 1);
     }
     y = Number(y.join(""))
     if (y.toString(2).length > 31) return 0;
     return x > 0 ? y : -y;
 };