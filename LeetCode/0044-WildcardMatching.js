/**
 * @see {@link https://leetcode.com/problems/wildcard-matching/description/}
 * @description 通配符匹配
 * '?' 匹配任何单个字母
 * '*' 匹配按顺序排列的任何字母（包括空字符串）
 * @example
 * ```
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: false （第一个*匹配空字符串，第二个*可以匹配 dce）
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false （第一个*匹配空字符串，第二个?不能匹配 dc）
 * ```
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */