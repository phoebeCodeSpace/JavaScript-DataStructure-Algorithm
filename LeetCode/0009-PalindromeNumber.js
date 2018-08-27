/**
 * @see {@link https://leetcode.com/problems/palindrome-number/description/} 
 * @description 判断是否是回文数字
 * @example
 * ```
 * Input: 121
 * Output: true
 * Input: -121
 * Output: false
 * ```
 */
/**
 * @param {number} x
 * @return {boolean}
 */

// my solution
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x === 0) return true
    const xStr = x.toString()
    for (var i = 0; i < Math.floor(xStr.length / 2); i++) {
        if (xStr[i] !== xStr[xStr.length - i - 1]) return false
    }
    return true
};



var isPalindrome = function(x) {
    return String(x) === String(x).split('').reverse().join('') ? true : false
};