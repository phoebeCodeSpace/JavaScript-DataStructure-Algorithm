/**
 * @see {@link https://leetcode.com/problems/single-number-ii/description/}
 * @description 给定一个整型数组， 除了某一个数字展示一次， 其他每个数字展示三次， 找出这一个数字
 * @example
 * ```
 * Input: [2, 2, 3, 2]
 * Output: 3
 * ```
 */

// my solution
var singleNumber = function(nums) {
    var map = new Map()
    for (let num of nums) {
        let cur = map.get(num) || 0
        if (cur && cur === 2) {
            map.delete(num)
        } else {
            map.set(num, ++cur)
        }
    }
    return [...map][0][0]
};


var singleNumber = function(nums) {
    var a = 0,b=0
    for(let c of nums){
        a = (a ^ c) & ~b
        b = (b ^ c) & ~a
    }
    return a
};