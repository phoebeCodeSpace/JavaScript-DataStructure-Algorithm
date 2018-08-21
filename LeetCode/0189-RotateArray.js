/**
 * @see {@link https://leetcode.com/problems/rotate-array/description/}
 * @description 旋转数组
 * 给一个数组，将值从右转至左，k为旋转次数
 * @example
 * ```
 * Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
 * Output: [5, 6, 7, 1, 2, 3, 4]
 * Explanation:
 *  k=1: [7, 1, 2, 3, 4, 5, 6]
 *  k=2: [6, 7, 1, 2, 3, 4, 5]
 *  k=3: [5, 6, 7, 1, 2, 3, 4]
 * ```
 */

 /**
  * @param {number[]} nums
  * @param {number} k
  * @return {void} Do not return anything, modify nums in-place instead.
  */
  // method 1
  var rotate = function(nums, k) {
      for (var i = 1; i <= k; i++) {
          nums.unshift(nums.pop())
      }
  };
  
  // method 2
  var rotate = function(nums, k) {
      nums.unshift(...nums.splice(nums.length - k, k));
  };