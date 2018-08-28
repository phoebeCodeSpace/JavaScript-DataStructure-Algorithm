/**
 * @see {@link https://leetcode.com/problems/4sum/description/}
 * @description 给一组整形数组，求4个和为 目标值的数组
 * @example
 * ```
 * Input: nums = [1, 0, -1, 0, -2, 2],  target = 0.
 * Ouput: 
 * [
 *    [-1, 0, 0, 1],
 *    [-2, -1, 1, 2],
 *    [-2, 0, 0, 2]
 * ]
 * ```
 */

 // my solution
 var fourSum = function(nums, target) {
     let result = []
     const n = nums.length
     if (n < 4) return result
     nums.sort((a, b) => a - b)
     var max = nums[n - 1]
     var min = nums[0]
     if (min * 4 > target || max * 4 < target) return result

     for (var i = 0; i < n - 3; i++) {
         if (i > 0 && nums[i] === nums[i - 1]) continue // repeat
         if ((nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]) > target) break; // too big
         if ((nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3]) < target) continue; // too small to jump

         for (var j = i + 1; j < n - 2; j++) {
             if (j > i + 1 && nums[j] === nums[j - 1]) continue
             if ((nums[i] + nums[j] + nums[j + 1] + nums[j + 2]) > target) break; // too big
             if ((nums[i] + nums[j] + nums[n - 1] + nums[n - 2]) < target) continue;
             var k = j + 1,
                 l = n - 1;
             while (k < l) {
                 var sum = nums[i] + nums[j] + nums[k] + nums[l]
                 if (sum === target) result.push([nums[i], nums[j], nums[k], nums[l]])
                 if (sum >= target) {
                     while (nums[l] === nums[l - 1]) l--
                         l--
                 }
                 if (sum <= target) {
                     while (nums[k] === nums[k + 1]) k++
                         k++
                 }
             }
         }
     }
     return result
 };