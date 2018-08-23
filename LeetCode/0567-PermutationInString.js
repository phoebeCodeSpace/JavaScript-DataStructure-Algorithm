/**
 * @see {@link https://leetcode.com/problems/permutation-in-string/description/}
 * @description 
 * 判断字符串s2是否包含字符串s1的相同字母异序词
 * @example
 * ```
 * Input: s1 = "ab" s2 = "eidbaooo"
 * Output: True // ("ba")
 * ```
 */

 /**
  * @param {string} s1
  * @param {string} s2
  * @return {boolean}
  */

  var checkInclusion = function(s1, s2) {
      if (s1.length > s2.length) {
          return false;
      }

      if (s1.length === 0 || (s1.length === 0 && s2.length ===0)) {
          return true;
      }

      const map = Array(26).fill(0);    

      for (let ch of s1.split('')) {
          map[ch.charCodeAt(0)-'a'.charCodeAt(0)] += 1;
      }

      const buffer = Array(26).fill(0);

      for (let i=0; i<s2.length; i++) {
          buffer[s2.charCodeAt(i)-'a'.charCodeAt(0)] += 1;

          if (i >= s1.length) {
              buffer[s2.charCodeAt(i-s1.length)-'a'.charCodeAt(0)] -= 1;
          } 

          let missed = false;
          for (let j=0; j<26; j++) {
              if (map[j] !== buffer[j]) {
                  missed = true;
                  break;
              }
          }

          if (!missed) {
              return true;
          }
      }

      return false;
  };