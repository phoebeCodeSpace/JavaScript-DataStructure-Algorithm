/**
  * @see https: //leetcode.com/problems/two-sum/description/
  * @description 给定一个整型数组， 找出能相加起来等于一个特定目标数字的两个数
  * @param {number[]} nums 整型数组
  * @param {number} target 目标数字
  * @return {number[]} 返回目标索引
 */

const nums = [15,11,7,2]
const target = 9

/**
 * Approach 1
 * Time: O(n ^ 2)
 * Space: O(1)
 */
var twoSum1 = (nums, target) => {
  for(var i=0; i< nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++){
      if (nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
}

/**
 * Approach 2
 * Time: O(n ^ 2)
 * Space: O(1)
 */
var twoSum2 = function(nums, target) {
    var pairs = {};

    for (var i = 0; i < nums.length; i++) {
        pairs[nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++) {
        if (pairs[target - nums[i]] && pairs[target - nums[i]] !== i) {
            return [i, pairs[target - nums[i]]];
        }
    }
};
/**
 * Approach 3
 * Time: O(n)
 * Space: O(n)
 */
var twoSum3 = function(nums, target) {
  var pairs = {}
  for(var i=0;i<nums.length;i++){
    var complement = target - nums[i]
    if (pairs[complement] !== undefined && pairs[complement] !== i) {
      return [pairs[complement],i]
    }
    pairs[nums[i]] = i
  }
}
console.log(twoSum1(nums, target))
console.log(twoSum2(nums, target))
console.log(twoSum3(nums, target))

