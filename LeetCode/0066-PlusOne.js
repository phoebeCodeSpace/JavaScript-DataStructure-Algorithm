/**
 * @see {@link https://leetcode.com/problems/plus-one/description/}
 * @description 给一个非空数组，数组内每个元素是非空整数，获取数组形成的整数加一后的数组
 *```
 * Input: [1, 2, 3] 整数是 123
 * Output: [1, 2, 4]
 * Input: [4, 3, 2, 1] 整数是 4321
 * Output: [4, 3, 2, 2]
 * ```
 * @param {number[]} digits
 * @return {number[]}
 */

 /**
  * 1. 正常情况 尾数<9，则只需要尾数+1 返回数组
  * 2. 尾数为9，则尾数变为0，次尾数+1，依次类推
  * 3. 如果是所有元素都是9，则所有元素赋值为0，整个数组新增首位为1的元素
  */

  var plusOne = function(digits) {
      for (var i = digits.length - 1; i >= 0; i--) {
          if (++digits[i] > 9) digits[i] = 0;
          else return digits;
      }   
      digits.unshift(1);
      return digits;
};


var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) return digits;
    }
    return [1, ...digits]
};