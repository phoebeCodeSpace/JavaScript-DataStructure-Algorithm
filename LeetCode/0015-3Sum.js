/**
 * @see {@link https://leetcode.com/problems/3sum/description/}
 * @description 给一组整形数组，找出相加得0的3个数的数组。
 * @example
 * ```
 * Input nums = [-1, 0, 1, 2, -1, -4],
 * Output 
 *  [
 *     [-1, 0, 1],
 *     [-1, -1, 2]
 *   ]
 * ```
 */

 var threeSum = function(nums) {
     const result = []
     if (nums.length < 3) return result
     nums.sort((a, b) => a - b)
     var i = 0;
     while (i < nums.length - 2) {
         if (nums[i] > 0) break;
         if (i > 0 && nums[i] == nums[i - 1]) { // 如果是相同的数没必要再次遍历
             i++
             continue;
         }

         var j = i + 1
         var k = nums.length - 1
         while (j < k) {
             var sum = nums[i] + nums[j] + nums[k];
             if (sum === 0) {
                 result.push([nums[i], nums[j], nums[k]])
             }
             if (sum <= 0) {
                 while (j < k && nums[j + 1] === nums[j]) j++ // 如果下一位与其相同，继续寻找下一位
                     j++
             }
             if (sum >= 0) {
                 while (j < k && nums[k - 1] === nums[k]) k-- // 如果上一位与其相同，继续寻找上一位
                     k--
             }
         }
         i++
     }
     return result
 };