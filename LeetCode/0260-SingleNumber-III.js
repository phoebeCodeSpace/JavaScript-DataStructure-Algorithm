/**
 * @see {@link https://leetcode.com/problems/single-number-iii/description/}
 * @description 给定一个整型数组， 除了两个数字展示一次， 其他每个数字展示两次，找出出现一次的两个数的数组 
 * @example
 * ``` 
 * Input: [1, 2, 1, 3, 2, 5]
 * Output: [3, 5]
 * ```
 */

 /**
  * @param {number[]} nums
  * @return {number[]}
  */

//
 var singleNumber = function(nums) {
     var set = new Set()
     for (let num of nums) {
         set.has(num) ? set.delete(num) : set.add(num)
     }
     return [...set]
 };


 var singleNumber = function(nums) {
     var t = nums.reduce((t, n) => t ^ n, 0); // 获得这两个数xor的结果
     // 一个数变成负的，2's complement的情况就是取反加一。
     // 
     t = -t & t;
     return nums.reduce((r, n) => (n & t) ? [r[0] ^ n, r[1]] : [r[0], r[1] ^ n], [0, 0]);
 };