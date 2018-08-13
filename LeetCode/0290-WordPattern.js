/**
 * @see {@link https://leetcode.com/problems/word-pattern/description/}
 * @description  给出一个模板和一串字符串，判断字符串是否符合模板模型
 * @example 
 * ```
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * Input: pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * ```
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

// 思路：找到 pattern[idx] 相同则 arr[idx]，如果能找到不对等信息的，则返回false
 function wordPattern(pattern, str) {
     const arr = str.split(" ");
     if (pattern.length !== arr.length) {
         return false;
     }
     for (let i = 0; i < pattern.length; i++) {
         for (let j = i + 1; j < pattern.length; j++) {
             if (!(pattern[i] === pattern[j]) === (arr[i] === arr[j])) {
                 return false;
             }
         }
     }
     return true;
 }
// 思路：obj1['a'] = 'dog' ; obj2['dog'] = 'a' 
 var wordPattern = function(pattern, str) {
     let obj1 = {},
         obj2 = {};
     let arr1 = pattern.split(''),
         arr2 = str.split(' ');
     if (arr1.length !== arr2.length) return false;
     for (var i = 0; i < arr1.length; i++) {
         if (obj1[arr1[i]] && obj1[arr1[i]] !== arr2[i]) return false;
         if (obj2[arr2[i]] && obj2[arr2[i]] !== arr1[i]) return false;
         obj1[arr1[i]] = arr2[i];
         obj2[arr2[i]] = arr1[i];
     }
     return true;
 };

 