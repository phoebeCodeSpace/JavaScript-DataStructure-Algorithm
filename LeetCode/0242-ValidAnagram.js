/**
 * @see {@link https://leetcode.com/problems/valid-anagram/description/}
 * @description 检查两个字母是否是相同字母异序词
 */

/**
 * @param {*} s 
 * @param {*} t 
 * @return {boolean}
 */

// 创建一个freq数组，长度为256，内容都为0,用于记录字母出现次数。s字符串出现一次+1，t字符串出现一次-1，两两相抵。
// 最后统计freq不为0的个数
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let freq = new Array(256).fill(0)
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i)]++
    freq[t.charCodeAt(i)]--;
  }

  return freq.filter(idx => idx != 0).length > 0 ? false : true
};

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
};