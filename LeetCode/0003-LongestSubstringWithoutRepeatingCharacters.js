/**
 * @see {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/description/}
 * @description 找出没有重复字符的最长字符串
 * @example
 * ``` js
 * Input: "abcabcbb"
 * Output: 3 // abc
 * Input: "bbbbb"
 * Output: 1 // b
 * ```
 */

 /**
  * @tag:  reduce / string
  */

  // map 记录字母最后一次出现的位置
  // left 记录当前字符串初始位置
  function lengthOfLongestSubstring(s) {
      const map = {};
      var left = 0;

      return s.split('').reduce((max, v, i) => {
          // 如果出现过了（map[v] >= left） 重新计算新的字符串的位置
          left = map[v] >= left ? map[v] + 1 : left;
          // 更新该字母最后一次出现的位置
          map[v] = i;
          // 新计算的长度（i - left + 1）和之前最长的长度比较
          return Math.max(max, i - left + 1);
      }, 0);
  }
