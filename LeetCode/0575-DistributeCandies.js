/**
 * @see {@link https://leetcode.com/problems/distribute-candies/description/}
 * @description 分糖果🍬
 * 给一个偶数数组， 每个数字代表不同种类的糖果， 平均分给一对兄妹，返回妹妹可以获得最多的水果种类数目。
 * @example
 * ```
 * Input: candies = [1, 1, 2, 2, 3, 3]
 * Output: 3 (妹妹最多可以分到 1、2、3 3种糖果)
 * ```
 * @param {number[]} candies
 * @return {number}
 */

// 比较 每人可得到的糖果数和糖果种类数的大小
var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};