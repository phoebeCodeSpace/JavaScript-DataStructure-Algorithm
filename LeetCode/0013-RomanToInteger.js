/**
 * @see {@link https://leetcode.com/problems/roman-to-integer/description/}
 * @description 将罗马数字转化为整数
 */

 /**
  * @param {string} s
  * @return {number}
  */

  // my solution
  var romanToInt = function(s) {
      const roman = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
      }
      var result = 0
      for (var i = s.length - 1; i >= 0; i--) {

          var cur = roman[s[i]]
          if (s[i] === 'I' && s[i + 1] === 'V' || s[i] === 'I' && s[i + 1] === 'X') {
              result -= cur
              continue
          }
          if (s[i] === 'X' && s[i + 1] === 'L' || s[i] === 'X' && s[i + 1] === 'C') {
              result -= cur
              continue
          }
          if (s[i] === 'C' && s[i + 1] === 'D' || s[i] === 'C' && s[i + 1] === 'M') {
              result -= cur
              continue
          }
          result += cur
      }

      return result
  };

  // others 
  var romanToInt = function(s) {
      const obj = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
      };
      let arr = s.split('');
      return arr.reduce((sum, value, index) => {
          let mul;
          if (obj[value] < obj[arr[index + 1]]) {
              mul = -1;
          } else mul = 1;

          return sum + mul * obj[value];
      }, 0);
  };