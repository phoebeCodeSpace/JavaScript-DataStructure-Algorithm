/**
 * @see {@link https://leetcode.com/problems/longest-common-prefix/description/}
 * @description 找出一组字符串组成的数组中，最长的相同的前缀
 * @example
 * ```
 * Input: ["flower", "flow", "flight"]
 * Output: "fl"
 * ```
 */

 // my solution
 var longestCommonPrefix = function(strs) {
     let prefix = '';
     if (strs.length === 0) return prefix;
     if (strs.length === 1) return strs[0];
     strs.sort((a, b) => a.length - b.length)
     var shotest = strs[0]

     for (var i = 0; i < shotest.length; i++) {
         if (strs.slice(1).every(str => str[i] == shotest[i])) {
             prefix += shotest[i];
         } else {
             break
         }
     }
     return prefix
 };

 