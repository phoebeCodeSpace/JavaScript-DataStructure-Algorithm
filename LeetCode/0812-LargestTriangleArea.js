/**
 * @see {@link https://leetcode.com/problems/largest-triangle-area/description/}
 * @description 求最大三角形面积
 * 一组二维数组，求任三个数组组成最大三角形面积
 * @example
 * ```
 * Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * Output: 2
 * ```
 */


/**
  * @param {number[][]} points
  * @return {number}
  */
 var largestTriangleArea = function(points) {
     let res = 0;
     for (let p1 of points)
         for (let p2 of points)
             for (let p3 of points)
                 res = Math.max(res, triangleArea(p1, p2, p3));
     return res;
 };

 /**
  * @see {@link https://en.wikipedia.org/wiki/Shoelace_formula}
  */
 var triangleArea = function(p1, p2, p3) {
     return 0.5 * Math.abs(p1[0] * p2[1] + p2[0] * p3[1] + p3[0] * p1[1] - p2[0] * p1[1] - p3[0] * p2[1] - p1[0] * p3[1]);
 }