/**
 * @see {@link https://leetcode.com/problems/excel-sheet-column-number/description/}
 * @description 一列字母代表对应数字
 * ```
 * A - > 1
 * B - > 2
 * C - > 3
 * ...
 * Z - > 26
 * AA - > 27
 * AB - > 28
 * ...
 * ```
 * @example
 * ```
 * Input: "A"
 * Output: 1
 * Input: "AB"
 * Output: 28
 * Input: "ZY"
 * Output: 701
 * ```
 */

 /**
  * @param {string} s
  * @return {number}
  */

  function titleToNumber(s) {
      let n = 0;

      for (let c of s) {
          n = n * 26 + (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
      }

      return n;
  }

  var titleToNumber = function(s) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      let total = 0
      let count = 0
      for (var i = s.length - 1; i >= 0; i--) {
          total += (letters.indexOf(s[i]) + 1) * Math.pow(26, count)
          count++
      }
      return total
  };