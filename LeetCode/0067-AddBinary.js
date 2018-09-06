/**
 * @see {@link https://leetcode.com/problems/add-binary/description/}
 * @description 二进制求和
 * @example 
 * ```
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * ···
 */


 /**
  * @param {string} a
  * @param {string} b
  * @return {string}
  */
 var addBinary = function(a, b) {
     var result = '';
     var i = a.length - 1,
         j = b.length - 1;
     var carry = 0; // 进位
     while (i >= 0 || j >= 0 || carry > 0) {
         var tempA = a[i] || '0'
         var tempB = b[j] || '0'
         var tempSum = parseInt(tempA) + parseInt(tempB) + carry
         var digit = tempSum % 2
         carry = Math.floor(tempSum / 2)
         result = digit + result
         i--
         j--
     }
     return result
 };
