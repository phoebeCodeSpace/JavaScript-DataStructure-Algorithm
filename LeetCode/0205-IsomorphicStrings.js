/**
 * @see {@link https://leetcode.com/problems/isomorphic-strings/description/}
 * @description 判断两个字符串是否是同形字符串
 * @example
 * ``` 
 * Input: s = "egg", t = "add"
 * Output: true
 * ```
 */

 // my solution 
 const helper = (s, t) => {
     var map = new Map()
     for (var i = 0; i < s.length; i++) {
         if (map.has(s[i])) {
             if (map.get(s[i]) !== t[i]) {
                 return false
             }
         }
         map.set(s[i], t[i])
     }
     return true
 }
 var isIsomorphic = function(s, t) {
     if (s.length !== t.length) return false
     return helper(s, t) && helper(t, s)
 };

 // optimize => 两个循环可以放在一个循环里
 var isIsomorphic = function(s, t) {
     if (s.length !== t.length) return false
     var map1 = {}
     var map2 = {}
     for (let i = 0; i < s.length; i++) {
         if (!map1[s[i]]) map1[s[i]] = t[i]
         else if (map1[s[i]] !== t[i]) return false
         if (!map2[t[i]]) map2[t[i]] = s[i];
         else if (map2[t[i]] !== s[i]) return false;
     }
     return true
 };