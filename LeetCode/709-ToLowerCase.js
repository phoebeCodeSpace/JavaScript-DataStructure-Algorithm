/**
 * @see {https: //leetcode.com/problems/to-lower-case/description/}
 * @description 将给定的字符串转化为小写
 * @description destructuring and map
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return [...str].map(s => {
        var code = s.charCodeAt()
        return (code >= 65 && code <= 90) ? String.fromCharCode(code + 32) : s
    }).join('')
};