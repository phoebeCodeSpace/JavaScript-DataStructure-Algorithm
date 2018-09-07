/**
 * @see {@link https://leetcode.com/problems/powx-n/description/}
 * @description 计算x的n次方
 */

 /**
  * @param {number} x
  * @param {number} n
  * @return {number}
  */
 var myPow = function(x, n) {
     if (n === 0 || x === 1) return 1;
     if (n < 0) {
         n = -n;
         x = 1 / x;
     }
     if (n % 3 === 0) {
         return myPow(x * x * x, n / 3);
     } else if (n % 2 === 0) {
         return myPow(x * x, n / 2);
     } else {
         return x * myPow(x, --n);
     }
 };