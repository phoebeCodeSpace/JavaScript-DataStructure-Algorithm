/**
 * @see {@link https://leetcode.com/problems/4sum-ii/description/}
 * @description  给四个整数数组，每个数组取出一个数求和，求和为0的个数
 * @example
 * ```
 * Input:
 *  A = [1, 2]
 *  B = [-2, -1]
 *  C = [-1, 2]
 *  D = [0, 2]
 * Output: 2
 * ```
 */

 /**
  * @param {number[]} A
  * @param {number[]} B
  * @param {number[]} C
  * @param {number[]} D
  * @return {number}
  */

 // 求出C、D组合之和的map
 // 计算A、B组合之和在map存在的个数
 var fourSumCount = function(A, B, C, D) {
     var mp = {}
     for (var i = 0; i < C.length; i++) {
         for (var j = 0; j < D.length; j++) {
             var sum = C[i] + D[j]
             mp[sum] = mp[sum] + 1 || 1
         }
     }
     var count = 0
     for (var i = 0; i < A.length; i++) {
         for (var j = 0; j < B.length; j++) {
             count += mp[-1 * (A[i] + B[j])] || 0
         }
     }

     return count
 };