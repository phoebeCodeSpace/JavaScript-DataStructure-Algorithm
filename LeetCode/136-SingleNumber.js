/**
 * @see {@link https://leetcode.com/problems/single-number/description/}
 * @description 给定一个整型数组， 除了某一个数字展示一次， 其他每个数字展示两次，找出这一个数字
 * @param {number[]} nums 整型数组
 * @return {number} 
 */

// 思路： 通过位运算重复的字符串两两相抵为0，0^singleNumber 返回 singleNumber
var singleNumber = function(nums) {
    return nums.reduce((a, b) => a ^ b);
};

// 思路：按顺序排序，循环递增2，找到 nums[i] != nums[i + 1] 的值
var singleNumber = function(nums) {
    nums.sort();
    for (var i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
};

// 比较元素第一个索引和最后一个索引是否相同
var singleNumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
    }
};