/**
 * @see {@link https://leetcode.com/problems/maximum-average-subarray-i/description/}
 * @description 求数组最大平均值
 * 给一组整数数组，找出连续的k个数最大的平均值
 * @example
 * ```
 * Input: [1, 12, -5, -6, 50, 3], k = 4
 * Output: 12.75
 * Explanation: Maximum average is(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 * ```
 */

 // 依次相加，当sum为k个值时，依次与max比较
 const findMaxAverage = (nums, k) => {
     let sum = 0;
     let max = -Infinity;

     for (let i = 0; i < nums.length; i++) {
         sum += nums[i];

         if (i >= k - 1) {
             max = Math.max(max, sum / k);
             sum -= nums[i - k + 1];
         }
     }

     return max;
 };