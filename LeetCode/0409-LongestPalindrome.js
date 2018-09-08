/**
 * @see {@link https://leetcode.com/problems/longest-palindrome/description/}
 * @description 判断最长回文的长度
 * 给一串字符串，找出能组合成回文的最长的长度
 * @example
 * ```
 * Input: "abccccdd"
 * Output: 7
 * ```
 * @tag palindrome / string
 */

 /**
  * @param {string} s
  * @return {number}
  */

// my solution
 var longestPalindrome = function(s) {
     var map = {}
     for (var i = 0; i < s.length; i++) {
         if (map[s[i]]) {
             map[s[i]] = map[s[i]] + 1
         } else {
             map[s[i]] = 1
         }
     }
     let result = 0
     let isOdd = false
     for (c in map) {
         if (map[c] % 2 === 0) {
             result += map[c]
         } else {
             result += Math.floor(map[c] / 2) * 2
             isOdd = true
         }
     }
     if (isOdd) result++
     return result
 };

// sample 60 ms submission
// 优点：只有一次循环
 var longestPalindrome = function(s) {
     var map = {};
     var result = 0;
     // map[s[i]] 记录过一次，result+2；map[s[i] 重置
     for (let i = 0; i < s.length; i++) {
         if (map[s[i]] === undefined) {
             map[s[i]] = 1;
         } else if (map[s[i]] === 1) {
             map[s[i]] = undefined;
             result += 2;
         }
     }
     if (s.length > result) {
         result += 1;
     }
     return result;
 };